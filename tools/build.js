
let fs = require("fs-extra");
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

let buildConfig = JSON.parse(fs.readFileSync(__dirname + "/config.json"));

let devFolder = __dirname + "/" + buildConfig.devFolder;
let distFolder = __dirname + "/" + buildConfig.distFolder;

fs.copySync(devFolder, distFolder);

(async () => {
    let compiledSource = "";
    let templatesSource = "";

    let config = JSON.parse(fs.readFileSync(distFolder + "/ospf/config.json", { encoding: "utf8" }));
    let coreComponents = config.coreComponents;
    let customComponents = config.customComponents;

    for (let component of coreComponents) {
        console.log("Compiling " + component);
        let name = component.replace("core/", "");
        compiledSource += fs.readFileSync(distFolder + "/ospf/components/" + component + "/" + name + ".js", { encoding: "utf8" });
        compiledSource += "\n\n";

        if (fs.existsSync(distFolder + "/ospf/components/" + component + "/" + name + ".html")) {
            console.log("Compiling " + component + " template");
            let componentTemplate = "templates[\"" + name + "\"] = " + JSON.stringify(fs.readFileSync(distFolder + "/ospf/components/" + component + "/" + name + ".html", { encoding: "utf8" })).replace('"', '\"') + ";\n"
            templatesSource += componentTemplate;
        }
    }

    for (let component of customComponents) {
        console.log("Compiling " + component);
        let name = component.replace("custom/", "");
        compiledSource += fs.readFileSync(distFolder + "/ospf/components/" + component + "/" + name + ".js", { encoding: "utf8" });
        compiledSource += "\n\n";

        if (fs.existsSync(distFolder + "/ospf/components/" + component + "/" + name + ".html")) {
            console.log("Compiling " + component + " template");
            let componentTemplate = "templates[\"" + name + "\"] = " + JSON.stringify(fs.readFileSync(distFolder + "/ospf/components/" + component + "/" + name + ".html", { encoding: "utf8" })).replace('"', '\"') + ";\n"
            templatesSource += componentTemplate;
        }
    }

    fs.writeFileSync(distFolder + "/ospf/compiled_components.js", compiledSource + "\n" + templatesSource, { encoding: "utf8" });
    compiledSource = compiledSource + "\n" + templatesSource;

    var obfuscationResult;

    console.log("Minimizing compiled files");
    try {
        obfuscationResult = JavaScriptObfuscator.obfuscate(
            compiledSource,
            obfuscationOptions
        );

        console.log("Writing compiled files");
        fs.writeFileSync(distFolder + "/ospf/compiled_components.js", obfuscationResult._obfuscatedCode, { encoding: "utf8" });
        config.productionMode = true;
        fs.writeFileSync(distFolder + "/ospf/config.json", JSON.stringify(config,null,4));

        fs.rmdirSync(distFolder + "/ospf/components", {recursive: true, force: true});

        console.log("Build completed. See your " + distFolder + " folder");

    } catch (e) {
        console.log("Error during compilation. You can still use the compiled components (PRODUCTION_MODE=true) but it is not minified");
    }
})();