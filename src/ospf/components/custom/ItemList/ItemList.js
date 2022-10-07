class ItemList extends Component {
    async init({}={}) {
        await super.init();
        this.items = [];
        this.filters = {};

        let check_all = await this.addChild("check_all", new CheckBoxBase());
        await check_all.init();
    }

    async onEvent(event){
        if(event.sender == this.getChild("check_all")){
            let checks = document.querySelectorAll("input");
            for(let check of checks){
                if(check.id.indexOf("checkbox_item_") > -1){
                    check.checked = this.getChild("check_all").value;
                }
            }
        }
    }

    async onDatabind(){
        let response = await app.api.get({
            action: "restaurant_search",
            auth: {
                login_token: "2fdcfd9c-44ba-11ed-8d48-0800277dcd5e"
            }
        });

        if(response.errors.length == 0){
            this.items = response.results;
        }
    }

    async editClick(item_id){
        await this.fireEvent("intent_openItemEditView", {type: "item", item: this.items.find(a => a.id == item_id)});
    }
}