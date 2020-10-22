let fs = require("fs");

async function init() {
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

    // search for listeners
    for (let componentName of components) {
        let fileContents = readComponentSource(componentName);
        let componentEvents = [];
        for (let eventName of eventNames) {
            let match = fileContents.indexOf(eventName);
            if (match > -1) {
                componentEvents.push(eventName);
            }
        }
        console.log(componentName + ":", componentEvents);
    }

    function readComponentSource(componentName) {
        return fs.readFileSync(componentsFolder + "/" + componentName + "/" + componentName.split("/")[1] + ".js", { encoding: "utf8" });
    }

}



var walk = function (dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            /* Recurse into a subdirectory */
            results = results.concat(walk(file));
        } else {
            /* Is a file */
            results.push(file);
        }
    });
    return results;
}

init();