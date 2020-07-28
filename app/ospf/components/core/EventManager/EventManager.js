/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class EventManager extends Component {
    async init() {
        await super.init();
        this.listeners = this.listeners || [];
    }

    async fire(eventName, parameters, sender){
        for(let listener of this.listeners){
            if(listener.eventName == eventName){
                await listener.handler({
                    parameters: parameters,
                    sender: sender,
                    listener: listener,
                    name: eventName
                });
            }
        }
    }

    async addListener(eventName, handler){
        let id = uuid();
        this.listeners.push({
            id: id,
            eventName: eventName,
            handler: handler
        });
        return id;
    }

    async removeListener(id){
        this.listeners.splice(
            this.listeners.indexOf(this.listeners.find(item => item.id == id)),
            1
        );
    }
}
