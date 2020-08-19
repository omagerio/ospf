/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class ComponentPlaceholder extends Component {
    async init({className} = {}) {
        await super.init(); // always call init method of super component first
        this.className = className;
    }

    async setComponent(component){
        if(component){
            await this.addChild("component", component);
        }else{
            await this.removeChild("component");
        }
        await this.update();
    }
}