class ItemList extends Component {
    async init({}={}) {
        await super.init();
        this.items = [];
        this.filters = {};
    }

    async onDatabind(){
        /*let response = await app.api.get({
            action: "item_list",
            admin_token: "ea4b40de-32b2-11ed-ba5d-0800277dcd5e"
        });

        if(response.errors.length == 0){
            this.items = response.results;
        }*/

        console.log(this);
    }

    async editClick(item_id){
        await this.fireEvent("intent_openItemEditView", {type: "user", item: this.items.find(a => a.id == item_id)});
    }

    // async onDatabind(){}
    // async onBeforeEvent(event){}
    // async onEvent(event){}
    // async onAfterEvent(event){}
    // async onBeforeRefresh(){}
    // async onAfterRefresh(){}
    // async onFirstRender(){}
}