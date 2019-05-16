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
		this.panelName = "panel";
		this.id = "p" + lastComponentId++;
		createdComponents[this.id] = this;
		this.rendered = false;
		this.parent = parent;
	};

	destroy() {
		createdComponents[this.id] = undefined;
		delete createdComponents[this.id];
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
		// let index = createdComponents.indexOf(this);
		return "createdComponents." + this.id;
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
						clearInterval(renderedInterval);
					}
				}, 100
			);

		}

		return html;
	};

	/**
	 * Refreshes the template only.
	 * @param {function} callback
	 */
	async refresh(callback) {

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

		if (typeof callback == "function") {
			callback();
		}
	};

	onRender() { };

	/**
	 *
	 */
	databind() {
		for (let component of Object.values(createdComponents)) {
			if (component.parent == this) {
				component.databind();
			}
		}
	}

	/**
	 * Updates the control, calling databind() and then refresh()
	 * @param {function} callback
	 */
	update(callback) {
		this.databind();
		this.refresh(callback);
	}
}