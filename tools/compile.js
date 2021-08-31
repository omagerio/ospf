
let fs = require("fs");
let JavaScriptObfuscator = require('javascript-obfuscator');
let obfuscationOptions = {
    compact: true,
    controlFlowFlattening: false,
    deadCodeInjection: false,
    debugProtection: false,
    debugProtectionInterval: false,
    disableConsoleOutput: true,
    identifierNamesGenerator: 'mangled',
    log: false,
    renameGlobals: false,
    rotateStringArray: true,
    selfDefending: true,
    stringArray: true,
    stringArrayEncoding: false,
    stringArrayThreshold: 1,
    unicodeEscapeSequence: false
};

let appDir = __dirname + "/../app";

(async () => {
    let compiledSource = "";
    let templatesSource = "";

    let config = JSON.parse(fs.readFileSync(appDir + "/ospf/config.json", { encoding: "utf8" }));
    let coreComponents = config.coreComponents;
    let customComponents = config.customComponents;

    for (let component of coreComponents) {
        console.log("Compiling " + component);
        let name = component.replace("core/", "");
        compiledSource += fs.readFileSync(appDir + "/ospf/components/" + component + "/" + name + ".js", { encoding: "utf8" });
        compiledSource += "\n\n";

        if (fs.existsSync(appDir + "/ospf/components/" + component + "/" + name + ".html")) {
            console.log("Compiling " + component + " template");
            let componentTemplate = "templates[\"" + name + "\"] = " + JSON.stringify(fs.readFileSync(appDir + "/ospf/components/" + component + "/" + name + ".html", { encoding: "utf8" })).replace('"', '\"') + ";\n"
            templatesSource += componentTemplate;
        }
    }

    for (let component of customComponents) {
        console.log("Compiling " + component);
        let name = component.replace("custom/", "");
        compiledSource += fs.readFileSync(appDir + "/ospf/components/" + component + "/" + name + ".js", { encoding: "utf8" });
        compiledSource += "\n\n";

        if (fs.existsSync(appDir + "/ospf/components/" + component + "/" + name + ".html")) {
            console.log("Compiling " + component + " template");
            let componentTemplate = "templates[\"" + name + "\"] = " + JSON.stringify(fs.readFileSync(appDir + "/ospf/components/" + component + "/" + name + ".html", { encoding: "utf8" })).replace('"', '\"') + ";\n"
            templatesSource += componentTemplate;
        }
    }

    // console.log("Source to minimize: ", compiledSource);
    fs.writeFileSync(appDir + "/ospf/compiled_components.js", compiledSource + "\n" + templatesSource, { encoding: "utf8" });
    // compiledSource = encodeURIComponent(compiledSource + "\n" + templatesSource);
    compiledSource = compiledSource + "\n" + templatesSource;

    var obfuscationResult;

    console.log("Minimizing compiled files");
    try {
        obfuscationResult = JavaScriptObfuscator.obfuscate(
            compiledSource,
            obfuscationOptions
        );

        console.log(obfuscationResult);

        console.log("Writing compiled files");
        fs.writeFileSync(appDir + "/ospf/compiled_components.js", obfuscationResult._obfuscatedCode, {encoding: "utf8"});
        console.log("Compiled files created. Set PRODUCTION_MODE=true in config.js. You can delete 'ospf/components' folder in the release package to hide source files.");
    } catch (e) {
        console.log("Error during compilation. You can still use the compiled components (PRODUCTION_MODE=true) but it is not minified");
    }
})();