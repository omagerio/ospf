class Component {
    constructor() {
        this.datasource = [];
        this._children = {};
        this._id = this.constructor.name + "_" + lastComponentIndex++;
        this._rendered = false;
        this._initialized = false;
    }

    /**
     * Adds a child component to this component.
     * @param {Component} child
     * @param {string} name
     */
    addChild(child, name) {
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
     * Returns a reference to this component. To be used inside inline events.
     * @returns {string}
     */
    self() {
        return "getComponentById(`" + this._id + "`)";
    }

    /**
     * Main initialization method. Always call it when creating new components.
     * Always call "await super.init()" at the start of your method.
     */
    async init() {
        this._initialized = true;
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
        let newHtml = this.render();
        let elem = document.getElementById(this._id);
        if (elem) {
            document.getElementById(this._id).outerHTML = newHtml; // this may cause flickering - use preloaded HTML
        } else {
            throw "Cannot refresh " + this.constructor.name + " because it is not rendered!";
        }

        /*
        // This is not required
        for(let childName of Object.getOwnPropertyNames(this._children)){
            await this._children[childName].refresh();
        }
        */
    }

    /**
     * First reloads data and then refreshes the template.
     */
    async update() {
        await this.databind();
        await this.refresh();
    }

    /**
     * Returns rendered template.
     */
    render() {
        if (this._initialized == false) {
            throw "Cannot render " + this.constructor.name + " because you have not called init(). Call init() first.";
        }

        let html = ejs.render(templates[this.constructor.name], { c: this });

        let afterRender = async () => {
            let updated = false;
            while (updated == false) {
                await sleep(100);
                if (qs("#" + this._id)) {
                    if (this._rendered == false) {
                        await this.onFirstRender();
                        this._rendered = true;
                    }
                    await this.onRefresh();
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
    async onRefresh() { }

    /**
     * Create a child ID you can use to be unique.
     * @param {string} string
     */
    createId(string) {
        return this._id + "_" + string;
    }
}