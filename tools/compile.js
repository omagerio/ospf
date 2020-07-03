
let fs = require("fs");
let http = require("http");

let appDir = __dirname + "/../app";

(async () => {
    let compiledSource = "";
    let templatesSource = "";

    let componentsCoreSource = fs.readFileSync(appDir + "/ospf/components_core.js", { encoding: "utf8" });
    let componentsCustomSource = fs.readFileSync(appDir + "/ospf/components_custom.js", { encoding: "utf8" });

    eval(componentsCoreSource);
    eval(componentsCustomSource);

    for (let component of coreComponents) {
        console.log("Compiling " + component);
        let name = component.replace("core/", "");
        compiledSource += fs.readFileSync(appDir + "/ospf/components/" + component + "/" + name + ".js");
        compiledSource += "\n\n";

        if (fs.existsSync(appDir + "/ospf/components/" + component + "/" + name + ".html")) {
            console.log("Compiling " + component + " template");
            templatesSource += "templates[\"" + name + "\"] = " + JSON.stringify(fs.readFileSync(appDir + "/ospf/components/" + component + "/" + name + ".html", { encoding: "utf8" })).replace('"', '\"') + ";\n";
        }
    }

    for (let component of customComponents) {
        console.log("Compiling " + component);
        let name = component.replace("custom/", "");
        compiledSource += fs.readFileSync(appDir + "/ospf/components/" + component + "/" + name + ".js");
        compiledSource += "\n\n";

        if (fs.existsSync(appDir + "/ospf/components/" + component + "/" + name + ".html")) {
            console.log("Compiling " + component + " template");
            templatesSource += "templates[\"" + name + "\"] = " + JSON.stringify(fs.readFileSync(appDir + "/ospf/components/" + component + "/" + name + ".html", { encoding: "utf8" })).replace('"', '\"') + ";\n";;
        }
    }

    // console.log("Source to minimize: ", compiledSource);
    fs.writeFileSync(appDir + "/ospf/compiled_components.js", compiledSource + "\n" + templatesSource);
    compiledSource = encodeURIComponent(compiledSource + "\n" + templatesSource);

    console.log("Minimizing compiled files");
    let p1 = new Promise(
        (resolve, reject) => {
            let data = compiledSource;
            let options = {
                hostname: 'javascript-obfuscator-api.herokuapp.com',
                port: 80,
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain; charset=utf-8',
                    'Content-Length': data.length,
                }
            }

            let responseBuffer = "";
            let req = http.request(options, (res) => {
                res.on('data', (d) => {
                    responseBuffer += d;
                });

                res.on("end", () => {
                    let response = JSON.parse(responseBuffer);
                    if (response.success == 1) {
                        compiledSource = response.data;
                        resolve();
                    } else {
                        reject();
                    }
                });

            });

            req.write(data);
            req.end();
        }
    );
    try {
        await p1;
        console.log("Writing compiled files");
        fs.writeFileSync(appDir + "/ospf/compiled_components.js", compiledSource);
        console.log("Compiled files created");
    } catch (e) {
        console.log("Error during compilation. You can still use the compiled components (PRODUCTION_MODE=true) but it is not minified");
    }
})();