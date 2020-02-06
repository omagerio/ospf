
let fs = require("fs");
let compiledSource = "";
let templatesSource = "";

let componentsCoreSource = fs.readFileSync(__dirname + "/../ospf/components_core.js", {encoding:"utf8"});
let componentsCustomSource = fs.readFileSync(__dirname + "/../ospf/components_custom.js", {encoding:"utf8"});

eval(componentsCoreSource);
eval(componentsCustomSource);

for(let component of coreComponents){
    let name = component.replace("core/","");
    compiledSource += fs.readFileSync(__dirname + "/../ospf/components/" + component + "/" + name + ".js");
    compiledSource += "\n\n";

    if(fs.existsSync(__dirname + "/../ospf/components/" + component + "/" + name + ".html")){
        templatesSource += "templates[\""+name+"\"] = "+JSON.stringify(fs.readFileSync(__dirname + "/../ospf/components/" + component + "/" + name + ".html", {encoding:"utf8"})).replace('"', '\"')+";\n";
    }
}

for(let component of customComponents){
    let name = component.replace("custom/","");
    compiledSource += fs.readFileSync(__dirname + "/../ospf/components/" + component + "/" + name + ".js");
    compiledSource += "\n\n";

    if(fs.existsSync(__dirname + "/../ospf/components/" + component + "/" + name + ".html")){
        templatesSource += "templates[\""+name+"\"] = "+JSON.stringify(fs.readFileSync(__dirname + "/../ospf/components/" + component + "/" + name + ".html", {encoding:"utf8"})).replace('"', '\"')+";\n";  ;
    }
}

fs.writeFileSync(__dirname + "/../ospf/compiled_components.js", compiledSource);
fs.writeFileSync(__dirname + "/../ospf/compiled_templates.js", templatesSource);

console.log("Compiled files created");