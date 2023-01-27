class Component {
    constructor() {
        this.datasource = [];
        this._children = {};
        this._childrenHistory = {};
        this._id = this.constructor.name + "_" + lastComponentIndex++;
        this._name = "Component";
        this._rendered = false;
        this._initialized = false;
        this._parsedTemplate = null;
        this._classname = this.constructor.name;
        this._eventListeners = [];
        this._dom = null;
        this._needsRefresh = false;
        this._isRefreshing = false;
        this._lastRefreshTime = 0;
        this._parent = null;
    }

    static async PauseUntilRendered(id) {
        while (1) {
            let elem = document.querySelector("#" + id);
            if (!elem) {
                await sleep(100);
            } else {
                return elem;
            }
        }
    }

    /**
     * Adds a child component to this component.
     * @param {Component} child
     * @param {string} name
     */
    async addChild(name, child) {
        if (child == null) {
            return;
        }

        if (this._children[name] != undefined) {
            await this._children[name].replace();
        }

        this._children[name] = child;
        child._name = name;
        child._parent = this;
        return child;
    }

    /**
     * Add child to history
     * @param {*} name
     * @param {*} newChild
     */
    async pushChild(name, newChild) {
        let child = await this.addChild(name, newChild);
        if (this._childrenHistory[name] == undefined) {
            this._childrenHistory[name] = [];
        }

        this._childrenHistory[name].push(newChild);
        return child;
    }

    /**
     * Remove child from history and set previous one
     * @param {} name
     */
    async popChild(name) {
        if (this._childrenHistory[name] != undefined && this._childrenHistory[name].length > 1) {
            this._childrenHistory[name].pop();
            return await this.addChild(name, this._childrenHistory[name][this._childrenHistory[name].length - 1]);
        }
    }

    /**
     * Called when the component is replaced whith something else
     */
    async replace() {
        await this.onBeforeReplace();

        let childrenNames = Object.getOwnPropertyNames(this._children);
        for (let childName of childrenNames) {
            await this._children[childName].replace();
        }

        await this.onAfterReplace();
    }

    async onBeforeReplace() { }
    async onAfterReplace() { }

    /**
     * Removes a child component from this component.
     * @param {string} name
     */
    async removeChild(name) {
        await this._children[name].destroy();
        delete this._children[name];
    }

    /**
     * Returns child component by name.
     * @param {string} name
     */
    getChild(name) {
        if (this._initialized == false) {
            console.warn("This component is not initialized:", this);
        }

        let child = this._children[name];
        return child;
    }

    getChildren() {
        let children = [];
        for (let childName of Object.getOwnPropertyNames(this._children)) {
            children.push({ name: childName, component: this._children[childName] });
        }
        return children;
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
    renderEvent(jsEvent, event, parameter = null) {
        let jsonParameter = escape(JSON.stringify(parameter));
        return jsEvent + "=\"" + this.self() + ".handleEvent('" + event + "', '" + jsonParameter + "', event)\"";
    }

    async handleEvent(event, jsonParameter, jsEvent) {
        await app._execOnParseInput();
        let parameter = JSON.parse(unescape(jsonParameter));
        await this[event](parameter, jsEvent);
    }

    async _execOnParseInput() {
        await this.onParseInput();
        for (let child of this.getChildren()) {
            await child.component._execOnParseInput();
        }
    }

    /**
     * Parse user input
     */
    async onParseInput() { }

    /**
     * Main initialization method. Always call it when creating new components.
     * Always call "await super.init()" at the start of your method.
     */
    async init() {
        if(this._parent == null){
            console.error("This component is orphan. Call addChild() before calling init().", this);
            throw new Error("orphan_component");
        }
        this._initialized = true;
    }

    /**
     * Reload all the data (data only). This does not update the template! Use refresh() to refresh the template.
     */
    async databind({recursive = true}  = {}) {
        let ps = [];
        ps.push(this.onDatabind());
        if(recursive){
            ps.push(this.databindChildren());
        }

        await Promise.all(ps);
    }

    async onDatabind() { }

    async databindChildren() {
        let ps = [];
        let childrenNames = Object.getOwnPropertyNames(this._children);
        for (let childName of childrenNames) {
            ps.push(this._children[childName].databind());
        }
        await Promise.all(ps);
    }

    async update(){
        console.error("update() method has been deprecated. Please use databind() and refresh() together");
    }

    _setNeedsRefresh(needsRefresh) {
        this._needsRefresh = needsRefresh;
        let children = this.getChildren();
        for (let child of children) {
            child.component._setNeedsRefresh(needsRefresh);
        }
    }

    async refreshChildrenIfNeeded() {
        let refreshed = false;
        let children = this.getChildren();
        for (let child of children) {
            if (child.component._needsRefresh) {
                await child.component._refresh();
                child.component._lastRefreshTime = Date.now();
                refreshed = true;
            }else{
                refreshed = await child.component.refreshChildrenIfNeeded() || refreshed;
            }
        }
        return refreshed;
    }

    async refresh() {
        this._needsRefresh = true;
        // this._refresh();
    }

    /**
     * Refreshes the component template. This does not reload data! Use databind() instead.
     */
    async _refresh() {

        while (this._isRefreshing == true) {
            await sleep(100);
        }

        this._isRefreshing = true;

        await this._execOnBeforeRefresh();

        let elem = document.getElementById(this._id);
        if (elem) {
            await this.parseTemplate();

            let preloader = qs("#htmlPreloader");
            let target = document.getElementById(this._id);

            let tempDiv = document.createElement("div");
            tempDiv.id = this._id + "_preloader";
            tempDiv.innerHTML = this._parsedTemplate;
            preloader.appendChild(tempDiv);
            await Component.PauseUntilRendered(tempDiv.id);

            if (target.parentNode != null) {
                target.outerHTML = tempDiv.innerHTML;
            }

            preloader.removeChild(tempDiv);
            await sleep(100);

            this._dom = document.getElementById(this._id);

            this._setNeedsRefresh(false);

            await this._execOnAfterRefresh();
        } else {
            //throw new Error("Cannot refresh " + this.constructor.name + " because it is not rendered!");
        }

        this._isRefreshing = false;
    }

    /**
     * Parses the template of the component and children
     */
    async parseTemplate() {
        for (let childName of Object.getOwnPropertyNames(this._children)) {
            await this._children[childName].parseTemplate();
        }

        let template;

        if (templates[this.constructor.name] == undefined || templates[this.constructor.name] == "") {
            template = templates[Object.getPrototypeOf(this.constructor).name]; // FIXME
        } else {
            template = templates[this.constructor.name];
        }

        let html = ejs.render(template, { c: this });

        if (app.config.productionMode == false) {
            let domParser = new DOMParser();
            let dom = domParser.parseFromString(html, "text/html");
            let children = dom.querySelector("body").children;
            if (children.length > 1) {
                throw new Error("Template component must have only one wrapper! (" + this._classname + ")");
            }
            if (children[0].id != this._id) {
                throw new Error("Component wrapper must have the ID attribute set to the component ID! (" + this._classname + ")");
            }
            this._parsedTemplate = html.replace(">", " ospf-componentName='" + this._classname + "' ospf-childName='" + this._name + "' >");
        } else {
            this._parsedTemplate = html;
        }
    }

    /**
     * Returns rendered template.
     */
    render() {
        if (this._initialized == false) {
            throw new Error("Cannot render " + this.constructor.name + " because you have not called init(). Call init() first.");
            return;
        }

        let html = this._parsedTemplate;

        let afterRender = async () => {
            let updated = false;
            while (updated == false) {
                await sleep(1);
                let elem = qs("#" + this._id);
                if (elem) {
                    this._dom = elem;
                    if (this._rendered == false) {
                        await this._execOnFirstRender();
                        this._rendered = true;
                    }
                    updated = true;
                }

            }
        };
        afterRender();

        return html;
    }

    async _execOnFirstRender() {
        await this.onFirstRender();
        /*for (let child of this.getChildren()) {
            await child.component._execOnFirstRender();
        }*/
    }

    /**
     * Called when the component gets rendered the first time.
     */
    async onFirstRender() { }

    async _execOnAfterRefresh() {
        await this.onAfterRefresh();
        for (let child of this.getChildren()) {
            await child.component._execOnAfterRefresh();
        }
    }

    /**
     * Called everytime the component gets refreshed.
     */
    async onAfterRefresh() { }

    async _execOnBeforeRefresh() {
        await this.onBeforeRefresh();
        for (let child of this.getChildren()) {
            await child.component._execOnBeforeRefresh();
        }
    }

    /**
     * Called before the component gets refreshed.
     */
    async onBeforeRefresh() { }

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

    renderString(string) {
        return ejs.render(string, { c: this });
    }

    /**
     * Destroys the component
     */
    async destroy() {
        await this._execOnBeforeDestroy();
    }

    async _execOnBeforeDestroy() {
        await this.onBeforeDestroy();
        for (let child of this.getChildren()) {
            await child.component._execOnBeforeDestroy();
        }
    }

    async onBeforeDestroy() { }

    async fireEvent(eventName, parameter) {
        let event = {
            name: eventName,
            parameter: parameter,
            sender: this
        };

        await app._execOnBeforeEvent(event);
        await app._execOnEvent(event);
        await app._execOnAfterEvent(event);
    }

    async _execOnBeforeEvent(event) {
        await this.onBeforeEvent(event);
        for (let child of this.getChildren()) {
            await child.component._execOnBeforeEvent(event);
        }
    }

    async _execOnEvent(event) {
        await this.onEvent(event);
        for (let child of this.getChildren()) {
            await child.component._execOnEvent(event);
        }
    }

    async _execOnAfterEvent(event) {
        await this.onAfterEvent(event);
        for (let child of this.getChildren()) {
            await child.component._execOnAfterEvent(event);
        }
    }

    async onBeforeEvent(event) { }
    async onEvent(event) { }
    async onAfterEvent(event) { }

    renderChild(childName) {
        return this.getChild(childName).render();
    }

    getTree(parent = null) {

        if (parent === null) {
            parent = {};
        }

        parent[this._id] = {};

        for (let child of this.getChildren()) {
            child.component.getTree(parent[this._id]);
        }

        return parent;
    }
}