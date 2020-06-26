/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class EventManager extends Component {
    async onAfterInit() {
        this.listeners = this.listeners || [];
    }

    async fireEvent(eventName, parameters, sender){
        for(let listener of this.listeners){
            if(listener.eventName == eventName){
                await listener.callback(parameters, sender, listener.staticData);
            }
        }
    }

    async addListener(eventName, callback, staticData){
        this.listeners.push({
            eventName: eventName,
            callback: callback,
            staticData: staticData
        });
    }
}
