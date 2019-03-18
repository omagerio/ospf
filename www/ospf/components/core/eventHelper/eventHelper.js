let eventHelper = null;

class EventHelper extends Panel {
	constructor(parent) {
		super(parent);
		let _self = this;
		this.panelName = "eventHelper";

		this.eventListeners = [];
	}

	static getInstance()
	{
		if(eventHelper == null){
			eventHelper = new EventHelper();
		}
		return eventHelper;
	}

	static addListener(event, listener){
		let helper = EventHelper.getInstance();
		if(typeof helper.eventListeners[event] == "undefined"){
			helper.eventListeners[event] = [];
		}

		helper.eventListeners[event].push(listener);
	}

	static trigger(event, parameters){
		let helper = EventHelper.getInstance();
		if(typeof helper.eventListeners[event] != "undefined"){
			for(let i=0; i<helper.eventListeners[event].length; i++){
				let newParameters = helper.eventListeners[event][i](parameters);
				if(typeof newParameters != "undefined"){
					parameters = newParameters;
				}
			}
		}
	}
}