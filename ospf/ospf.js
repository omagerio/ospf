let templates = {};
let lastComponentIndex = 0;
let root = null;

window.addEventListener("load", async () => {
    let body = document.querySelector("body");
    let head = document.querySelector("head");

    if (PRODUCTION_MODE == false) {
        let components = coreComponents.concat(customComponents);
        for (let component of components) {
            let script = document.createElement("script");
            let src = "ospf/components/" + component.replace(".js", "") + "/" + component.replace("core/", "").replace("custom/", "") + ".js";
            script.src = src;
            let p1 = new Promise((resolve) => {
                script.onload = () => {
                    resolve();
                }
            });
            head.appendChild(script);

            let xhr = new XMLHttpRequest();
            xhr.open("get", "ospf/components/" + component.replace(".js", "") + "/" + component.replace("core/", "").replace("custom/", "") + ".html");
            xhr.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
            let p2 = new Promise(
                (resolve) => {
                    xhr.onreadystatechange = () => {
                        if (xhr.readyState == 4) {
                            resolve();
                        }
                    }
                }
            );
            xhr.send();

            await Promise.all([p1, p2]);

            templates[component.replace("core/", "").replace("custom/", "")] = xhr.responseText;
        }
    }else{
        let scriptComponents = document.createElement("script");
        scriptComponents.src = "ospf/compiled_components.js";
        let p1 = new Promise(
            (resolve)=>{
                scriptComponents.onload = ()=>{resolve()};
            }
        );
        head.appendChild(scriptComponents);

        let scriptTemplates = document.createElement("script");
        scriptTemplates.src = "ospf/compiled_templates.js";
        let p2 = new Promise(
            (resolve)=>{
                scriptTemplates.onload = ()=>{resolve()};
            }
        );
        head.appendChild(scriptTemplates);

        await Promise.all([p1, p2]);
    }

    let preloader = document.createElement("div");
    preloader.id = "htmlPreloader";
    preloader.style.display = "none";
    body.appendChild(preloader);

    let rootElement = await appInit();
    body.innerHTML += rootElement;
});

function sleep(ms) {
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                resolve();
            }, ms)
        }
    );
}

function getComponentById(id, component) {
    let children = [];
    if (component == undefined) {
        children = { root: root };
    } else {
        children = component._children;
    }

    for (let childName of Object.getOwnPropertyNames(children)) {
        let child = children[childName];
        if (child._id == id) {
            return child;
        } else {
            let foundTemp = getComponentById(id, child);
            if (foundTemp != null) {
                return foundTemp;
            }
        }
    }

    return null;
}

function qs(selector) {
    return document.querySelector(selector);
}