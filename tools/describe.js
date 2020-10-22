let fs = require("fs");

async function init() {
    let config = JSON.parse(fs.readFileSync(__dirname + "/config.json"));
    let files = walk(__dirname + "/" + config.appFolder);

    // search for event names
    let eventNames = [];
    for(let file of files){
        let fileContents = fs.readFileSync(file, {encoding:"utf8"});
        let regex = /(fireEvent)(.*?)(["'])([a-zA-Z\-_]*)(["'])/g;

        let matches = regex.exec(fileContents);
        if(matches){
            if(eventNames.indexOf(matches[4]) == -1){
                eventNames.push(matches[4]);
            }
        }
    }
    console.log("Found events: ", eventNames);

    // search for listeners
    for(let file of files){
        let fileContents = fs.readFileSync(file, {encoding:"utf8"});
        for(let eventName of eventNames){
            let match = fileContents.indexOf(eventName);
            if(match > -1){
                console.log(file.replace(__dirname, ""), eventName);
            }
        }

    }

}

var walk = function(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
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