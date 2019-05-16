let eventHelper = null;

class EventHelper extends Panel {
	constructor(parent) {
		super(parent);
		let _self = this;
		this.panelName = "eventHelper";

		this.eventListeners = {};
	}

	static getInstance() {
		if (eventHelper == null) {
			eventHelper = new EventHelper();
		}
		return eventHelper;
	}

	static removeListener(event, listener) {
		let helper = EventHelper.getInstance();
		let pos = helper.eventListeners[event].indexOf(listener);
		helper.eventListeners[event].splice(pos, 1);
	}

	static addListener(event, listener) {
		let helper = EventHelper.getInstance();
		if (typeof helper.eventListeners[event] == "undefined") {
			helper.eventListeners[event] = [];
		}

		helper.eventListeners[event].push(listener);
		return listener;
	}

	static trigger(event, parameters) {
		let helper = EventHelper.getInstance();
		if (typeof helper.eventListeners[event] != "undefined") {
			for (let i = 0; i < helper.eventListeners[event].length; i++) {
				let newParameters = helper.eventListeners[event][i](parameters);
				if (typeof newParameters != "undefined") {
					parameters = newParameters;
				}
			}
		}
	}
}