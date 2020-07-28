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
            this.addChild("component", component);
        }else{
            this.removeChild("component");
        }
        await this.update();
    }
}