/**
 * Example component. Add your custom components to ospf/config.json to use them.
 */
class ModalContainer extends Component {
    async init({}={}) {
        await super.init(); // always call super.init() first
        this.isVisible = false;
    }

    async setModal(component){
        return await this.addChild("modal", component);
    }

    async show(){
        this.isVisible = true;
        await this.refresh();
    }

    async hide(){
        this.isVisible = false;
        await this.refresh();
    }

    // async onDatabind(){}
    // async onBeforeEvent(event){}
    // async onEvent(event){}
    // async onAfterEvent(event){}
    // async onBeforeRefresh(){}
    // async onAfterRefresh(){}
    // async onFirstRender(){}
}