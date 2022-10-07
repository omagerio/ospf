class Menu extends Component {
    async init({}={}) {
        await super.init();
    }

    async menuItemClick(parameter){
        await this.fireEvent("intent_openItemListView", {type: "item"});
    }

    // async onDatabind(){}
    // async onBeforeEvent(event){}
    // async onEvent(event){}
    // async onAfterEvent(event){}
    // async onBeforeRefresh(){}
    // async onAfterRefresh(){}
    // async onFirstRender(){}
}