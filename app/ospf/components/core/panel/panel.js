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

	constructor(parent = null) {
		this._children = [];
		this.panelName = "panel";
		this.id = "p" + lastComponentId++;
		this.rendered = false;
		this.parent = parent;
		if (this.parent != null) {
			parent._children.push(this);
		}
	};

	destroy() {
		// destroying all childrens
		for (let child of this._children) {
			child.destroy();
		}

		let cloned = this.parent._children.slice(0);
		for (let parentChild of cloned) {
			if (parentChild.id == this.id) {
				this.parent._children.splice(this.parent._children.indexOf(parentChild), 1);
			}
		}
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