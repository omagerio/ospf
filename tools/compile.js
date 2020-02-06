
let fs = require("fs");
let http = require("http");

(async () => {
    let compiledSource = "";
    let templatesSource = "";

    let componentsCoreSource = fs.readFileSync(__dirname + "/../ospf/components_core.js", { encoding: "utf8" });
    let componentsCustomSource = fs.readFileSync(__dirname + "/../ospf/components_custom.js", { encoding: "utf8" });

    eval(componentsCoreSource);
    eval(componentsCustomSource);

    for (let component of coreComponents) {
        console.log("Compiling " + component);
        let name = component.replace("core/", "");
        compiledSource += fs.readFileSync(__dirname + "/../ospf/components/" + component + "/" + name + ".js");
        compiledSource += "\n\n";

        if (fs.existsSync(__dirname + "/../ospf/components/" + component + "/" + name + ".html")) {
            console.log("Compiling " + component + " template");
            templatesSource += "templates[\"" + name + "\"] = " + JSON.stringify(fs.readFileSync(__dirname + "/../ospf/components/" + component + "/" + name + ".html", { encoding: "utf8" })).replace('"', '\"') + ";\n";
        }
    }

    for (let component of customComponents) {
        console.log("Compiling " + component);
        let name = component.replace("custom/", "");
        compiledSource += fs.readFileSync(__dirname + "/../ospf/components/" + component + "/" + name + ".js");
        compiledSource += "\n\n";

        if (fs.existsSync(__dirname + "/../ospf/components/" + component + "/" + name + ".html")) {
            console.log("Compiling " + component + " template");
            templatesSource += "templates[\"" + name + "\"] = " + JSON.stringify(fs.readFileSync(__dirname + "/../ospf/components/" + component + "/" + name + ".html", { encoding: "utf8" })).replace('"', '\"') + ";\n";;
        }
    }

    console.log("Minimizing compiled files");
    let p1 = new Promise(
        (resolve) => {
            let data = compiledSource;
            let options = {
                hostname: 'javascript-obfuscator-api.herokuapp.com',
                port: 80,
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                    'Content-Length': data.length
                }
            }

            let responseBuffer = "";
            let req = http.request(options, (res) => {
                res.on('data', (d) => {
                    responseBuffer += d;
                });

                res.on("end", () => {
                    compiledSource = JSON.parse(responseBuffer).data;
                    resolve();
                });

            });

            req.write(data);
            req.end();
        }
    );
    await p1;

    console.log("Writing compiled files");
    fs.writeFileSync(__dirname + "/../ospf/compiled_components.js", compiledSource);
    fs.writeFileSync(__dirname + "/../ospf/compiled_templates.js", templatesSource);

    console.log("Compiled files created");
})();