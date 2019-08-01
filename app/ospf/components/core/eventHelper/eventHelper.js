class EventHelper extends Panel {
	constructor(parent) {
		super(parent);
		let _self = this;
		this.panelName = "eventHelper";
		this.eventListeners = {};
		EventHelper.singleton = this;
	}

	static getInstance() {
		if(EventHelper.singleton == null){
			new EventHelper();
		}
		return EventHelper.singleton;
	}

	static removeListener(event, listener) {
		let helper = EventHelper.getInstance();
		if(helper.eventListeners[event] != undefined){
			let pos = helper.eventListeners[event].indexOf(listener);
			helper.eventListeners[event].splice(pos, 1);
		}
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