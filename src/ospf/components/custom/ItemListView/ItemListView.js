class ItemListView extends Component {
    async init({ } = {}) {
        await super.init();

        let menu = await this.addChild("menu", new Menu());
        await menu.init();

        let item_list = await this.addChild("item_list", new ItemList());
        await item_list.init();
    }

    async newClick() {
        await this.fireEvent("intent_openItemEditView", {type:"item", item: null});
    }

    // async onBeforeEvent(event){}
    // async onEvent(event){}
    // async onAfterEvent(event){}
    // async onBeforeRefresh(){}
    // async onAfterRefresh(){}
    // async onFirstRender(){}
}