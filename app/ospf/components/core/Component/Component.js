class Component {
    constructor() {
        this.datasource = [];
        this._children = {};
        this._id = this.constructor.name + "_" + lastComponentIndex++;
        this._rendered = false;
        this._initialized = false;
        this._parsedTemplate = null;
        this._classname = this.constructor.name;
    }

    static async Create(properties = {}){
        let c = eval("new " + this.name + "()");
        await c.init(properties);
        return c;
    }

    /**
     * Adds a child component to this component.
     * @param {Component} child
     * @param {string} name
     */
    addChild(name, child) {
        this._children[name] = child;
    }

    /**
     * Removes a child component from this component.
     * @param {string} name
     */
    removeChild(name) {
        delete this._children[name];
    }

    /**
     * Returns child component by name.
     * @param {string} name
     */
    getChild(name) {
        return this._children[name];
    }

    /**
     * Returns a reference to this component.
     * @returns {string}
     */
    self() {
        return "getComponentById(`" + this._id + "`)";
    }

    /**
     * Renders a event handler
     * @param {string} event
     * @param {string} parameter
     */
    renderEvent(event, parameters = null) {
        let jsonParameters = escape(JSON.stringify(parameters));
        return this.self() + ".handleEvent('" + event + "', '" + jsonParameters + "', event)";
    }

    async handleEvent(event, jsonParameters, jsEvent) {
        let formData = new FormData(document.querySelector("form"));
        let childrenNames = Object.getOwnPropertyNames(root._children);

        for (let childName of childrenNames) {
            await root._children[childName].parseInput(formData);
        }

        let parameters = JSON.parse(unescape(jsonParameters));
        await this[event](parameters, jsEvent);
    }

    /**
     * Parse user input
     */
    async parseInput(formData) {
        let childrenNames = Object.getOwnPropertyNames(this._children);
        for (let childName of childrenNames) {
            await this._children[childName].parseInput(formData);
        }
    }

    /**
     * Main initialization method. Always call it when creating new components.
     * Always call "await super.init()" at the start of your method.
     */
    async init(properties) {
        this._initialized = true;

        for(let name of Object.getOwnPropertyNames(properties)){
            this[name] = properties[name];
        }

        await this.onAfterInit();
    }

    async onAfterInit(){

    }

    /**
     * Reload all the data (data only). This does not update the template! Use refresh() or update() to refresh the template.
     */
    async databind() {
        let childrenNames = Object.getOwnPropertyNames(this._children);
        for (let childName of childrenNames) {
            await this._children[childName].databind();
        }
    }

    /**
     * Refreshes the component template. This does not reload data! Use databind() or update() instead.
     */
    async refresh() {

        await this.onBeforeRefresh();

        let elem = document.getElementById(this._id);
        if (elem) {
            await this.parseTemplate();

            let preloader = qs("#htmlPreloader");
            let target = document.getElementById(this._id);

            let tempDiv = document.createElement("div");
            tempDiv.id = this._id + "_preloader";
            tempDiv.innerHTML = this._parsedTemplate;
            preloader.appendChild(tempDiv);
            await sleep(10);

            target.outerHTML = tempDiv.innerHTML;
            preloader.removeChild(tempDiv);
            await sleep(10);

            await this.onAfterRefresh();
        } else {
            throw new Error("Cannot refresh " + this.constructor.name + " because it is not rendered!");
        }
    }

    /**
     * First reloads data and then refreshes the template.
     */
    async update() {
        await this.databind();
        await this.refresh();
    }

    /**
     * Parses the template of the component and children
     */
    async parseTemplate() {
        for (let childName of Object.getOwnPropertyNames(this._children)) {
            await this._children[childName].parseTemplate();
        }

        let html = ejs.render(templates[this.constructor.name], { c: this });
        this._parsedTemplate = html;
    }

    /**
     * Returns rendered template.
     */
    render() {
        if (this._initialized == false) {
            throw new Error("Cannot render " + this.constructor.name + " because you have not called init(). Call init() first.");
        }

        let html = this._parsedTemplate;

        let afterRender = async () => {
            let updated = false;
            while (updated == false) {
                await sleep(10);
                if (qs("#" + this._id)) {
                    if (this._rendered == false) {
                        await this.onFirstRender();
                        this._rendered = true;
                    }
                    // await this.onAfterRefresh();
                    updated = true;
                }

            }
        };
        afterRender();

        return html;
    }

    /**
     * Called when the component gets rendered the first time.
     */
    async onFirstRender() { }

    /**
     * Called everytime the component gets refreshed.
     */
    async onAfterRefresh() {
        for(let childName of Object.getOwnPropertyNames(this._children)){
            await this._children[childName].onAfterRefresh();
        }
    }

    /**
     * Called before the component gets refreshed.
     */
    async onBeforeRefresh() {
        for(let childName of Object.getOwnPropertyNames(this._children)){
            await this._children[childName].onBeforeRefresh();
        }
    }

    /**
     * Create a child ID you can use to be unique.
     * @param {string} string
     */
    createId(string) {
        return this._id + "_" + string;
    }


    async loadFile(url) {
        let p1 = new Promise(
            (resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open("get", url);
                xhr.addEventListener("readystatechange", () => {
                    if (xhr.readyState == 4) {
                        resolve(xhr.responseText);
                    }
                });
                xhr.send();
            }
        );

        let html = await p1;
        return html;
    }

    renderString(string){
        return ejs.render(string, { c: this });
    }
}