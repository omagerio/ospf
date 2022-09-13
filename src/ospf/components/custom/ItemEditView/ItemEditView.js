class ItemEditView extends Component {
    async init({item=null}={}) {
        await super.init();

        this.item = item;

        let menu = await this.addChild("menu", new Menu());
        await menu.init();

        let item_edit = await this.addChild("item_edit", new ItemEdit());
        await item_edit.init({item: this.item});
    }

    async saveClick(){
        await this.getChild("item_edit").save();
        await this.fireEvent("intent_openItemListView", {type: "item"});
    }

    async cancelClick(){
        await this.fireEvent("intent_back");
    }

    // async onBeforeEvent(event){}
    // async onEvent(event){}
    // async onAfterEvent(event){}
    // async onBeforeRefresh(){}
    // async onAfterRefresh(){}
    // async onFirstRender(){}
}