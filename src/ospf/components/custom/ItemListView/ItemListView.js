class ItemListView extends Component {
    async init({ } = {}) {
        await super.init();

        let menu = await this.addChild("menu", new Menu());
        await menu.init();

        let filter_id = await this.addChild("filter_id", new TextBox());
        await filter_id.init();

        let item_list = await this.addChild("item_list", new ItemList());
        await item_list.init();
    }

    async onDatabind(){

    }

    async newClick() {
        await this.fireEvent("intent_openItemEditView", {type:"item", item: null});
    }

    async filterClick(){
        let filters = {};
        filters.id = this.getChild("filter_id").value;

        this.getChild("item_list").filters = filters;
        await this.getChild("item_list").update();
    }

    async resetClick(){
        this.getChild("filter_id").value = null;
        await this.refresh();
        await this.filterClick();
    }

    // async onBeforeEvent(event){}
    // async onEvent(event){}
    // async onAfterEvent(event){}
    // async onBeforeRefresh(){}
    // async onAfterRefresh(){}
    // async onFirstRender(){}
}