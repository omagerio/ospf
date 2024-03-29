/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class ComponentWrapper extends Component {
    async init({className} = {}) {
        await super.init(); // always call init method of super component first
        this.className = className;
    }

    async setComponent(component){
        if(component){
            await this.addChild("component", component);

            if(component._initialized == false){
                await component.init();
            }

        }else{
            await this.removeChild("component");
        }
        await this.databind();
        await this.refresh();
    }
}