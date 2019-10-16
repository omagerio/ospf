// let onRenderQueue = [];
async function pauseIfNotRendered(id) {
	let tries = 0;
	return new Promise((resolve, reject) => {
		let interval = setInterval(() => {
			if (document.getElementById(id)) {
				clearInterval(interval);
				delete interval;
				resolve();
			} else {
				tries++;
			}

			if (tries > 1000) {
				clearInterval(interval);
			}
		}, 10);
	});
};

class Panel {

	constructor() {
		this._children = [];
		this.panelName = "panel";
		this.id = "p" + lastComponentId++;
		this.rendered = false;
	};

	static async Create(){
		let pnl = new Panel();
		return pnl;
	}

	removeChild(tags) {
		for (let childIndex in this._children) {
			let child = this._children[childIndex];
			if (child.tags == tags) {
				this._children.splice(childIndex, 1);
			}
		}
	}

	getChild(tags) {
		for (let childIndex in this._children) {
			let child = this._children[childIndex];
			if (child.tags == tags) {
				return this._children[childIndex];
			}
		}
	}

	async addChild(newPanelOrPromise, tags, removeOthersWithSameTags) {
		let panel;
		if(typeof newPanelOrPromise.then == "function"){
			panel = await newPanelOrPromise;
		}else{
			panel = newPanelOrPromise;
		}

		if(tags == undefined || tags == null){
			console.error("You have to define at least one tag in $tags");
		}

		if (removeOthersWithSameTags == undefined) {
			removeOthersWithSameTags = false;
		}

		if (!Array.isArray(tags)) {
			tags = [tags];
		}

		if (removeOthersWithSameTags) {
			this.removeChild(tags);
		}

		this._children.push(
			{
				"tags": tags,
				"panel": panel
			}
		);
	}

	getChildByTags(tags) {
		let children = this.getChildrenByTags(tags);
		if (children.length > 0) {
			return children[0];
		} else {
			return null;
		}
	}

	getChildrenByTags(tags) {
		if (!Array.isArray(tags)) {
			tags = [tags];
		}
		let children = [];
		for (let child of this._children) {
			let isCompatible = true;
			for (let tag of tags) {
				if (child.tags.indexOf(tag) == -1) {
					isCompatible = false;
				}
			}

			if(isCompatible){
				children.push(child.panel);
			}
		}
		return children;
	}

	destroy() {
		// destroying all children
		for (let child of this._children) {
			child.panel.destroy();
		}
		this._children = [];

		/*
		let cloned = this.parent._children.slice(0);
		for (let parentChild of cloned) {
			if (parentChild.id == this.id) {
				this.parent._children.splice(this.parent._children.indexOf(parentChild), 1);
			}
		}
		*/
	}

	static destroyAll(array) {
		for (let i = 0; i < array.length; i++) {
			array[i].destroy();
		}
		array = [];
	}

	createChildId(prefix) {
		let id = "";
		if (typeof prefix == "undefined") {
			id = "c" + generateUuid();
		} else {
			id = prefix + "_" + this.id;
		}
		return id;
	}

	child(tag){
		return this.getChildByTags(tag);
	}

	getThis() {
		let string = "getComponent('" + this.id + "')";
		return string;
	};

	getHtml() {
		let html = "";
		let _self = this;
		let panelIndex = this.panelName.substring(0, 1).toLowerCase() + this.panelName.substring(1);
		html = ejs.render(templates[panelIndex], { "_self": _self });

		if (this.rendered == false) {
			let renderedInterval = setInterval(
				() => {
					if (document.getElementById(this.id)) {
						this.rendered = true;
						this.onRender();
						this.onRefresh();
						clearInterval(renderedInterval);
						renderedInterval = null;
					}
				}, 100
			);

			setTimeout(() => {
				clearInterval(renderedInterval);
				renderedInterval = null;
			}, 1000);
		}

		return html;
	};

	/**
	 * Refreshes the template only.
	 */
	async refresh() {

		await pauseIfNotRendered(this.id);

		let targetDiv = document.querySelector("#" + this.id);

		let parser = new DOMParser();
		let doc = parser.parseFromString(this.getHtml(), "text/html");
		let html = doc.querySelector("#" + this.id).innerHTML;
		let preloaderId = this.id + "_preloader";

		let tempDiv = document.querySelector("#" + preloaderId);
		if (!tempDiv) {
			tempDiv = document.createElement("div");
			tempDiv.id = preloaderId;
		}

		tempDiv.innerHTML = html;
		document.querySelector("#htmlPreloader").appendChild(tempDiv);

		await pauseIfNotRendered(tempDiv.id);

		targetDiv.innerHTML = tempDiv.innerHTML;
		if (tempDiv.parentNode == document.querySelector("#htmlPreloader")) {
			document.querySelector("#htmlPreloader").removeChild(tempDiv);
		}

		this.onRefresh();
	};

	onRender() { };
	onRefresh() { };

	async databind() {
		for (let child of this._children) {
			await child.databind();
		}
	}

	/**
	 * Updates the control, calling databind() and then refresh()
	 * @param {function} callback
	 */
	async update() {
		await this.databind();
		await this.refresh();
	}

	validate() {
		let validationInfo = {
			"valid": true,
			"errors": []
		}
		for (let child of this._children) {
			let childValidationInfo = child.validate();
			if (childValidationInfo.valid == false) {
				validationInfo.valid = false;
				validationInfo.errors.concat(childValidationInfo.errors);
			}
		}
		return validationInfo;
	}
}