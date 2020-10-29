let fs = require("fs");

function escapeRegex(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

async function init() {
    let output = {};

    let config = JSON.parse(fs.readFileSync(__dirname + "/config.json"));
    let appConfig = JSON.parse(fs.readFileSync(__dirname + "/" + config.appFolder + "/ospf/config.json", { encoding: "utf8" }));

    let components = appConfig.coreComponents.concat(appConfig.customComponents);
    components = components.sort();

    let componentsFolder = __dirname + "/" + config.appFolder + "/ospf/components";

    // search for event names
    let eventNames = [];
    for (let componentName of components) {
        let fileContents = readComponentSource(componentName);
        let regex = /(fireEvent)(.*?)(["'])([a-zA-Z\-_]*)(["'])/g;

        let matches = regex.exec(fileContents);
        if (matches) {
            if (eventNames.indexOf(matches[4]) == -1) {
                eventNames.push(matches[4]);
            }
        }
    }
    eventNames = eventNames.sort();
    console.log("Found events: ", eventNames);

    output.events = eventNames;

    output.components = [];

    // search for listeners
    for (let componentName of components) {
        let fileContents = readComponentSource(componentName);
        let componentEvents = [];
        for (let eventName of eventNames) {
            let regex = new RegExp("(event\.name)( *?)(==)(.*?)(" + escapeRegex(eventName) + ")", "g");
            let matches = regex.exec(fileContents);
            if (matches && matches.length > 0) {
                componentEvents.push(eventName);
            }
        }
        console.log(componentName + ":", componentEvents);

        output.components.push({
            componentName: componentName,
            handlers: componentEvents
        });
    }

    console.log(JSON.stringify(output, null, 4));

    function readComponentSource(componentName) {
        return fs.readFileSync(componentsFolder + "/" + componentName + "/" + componentName.split("/")[1] + ".js", { encoding: "utf8" });
    }
}
init();