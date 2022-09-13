class ItemEdit extends Component {
    async init({item = null}={}) {
        await super.init();
        this.item = item;

        if(this.item == null){
            this.item = {};
        }

        let email_input = await this.addChild("email_input", new TextBox());
        await email_input.init();
        email_input.value = this.item.email;

        let name_input = await this.addChild("name_input", new TextBox());
        await name_input.init();
        name_input.value = this.item.full_name;

        let password_input = await this.addChild("password_input", new TextBox());
        await password_input.init();
        // password_input.value = this.item.password;
    }

    async save(){
        this.item.email = this.getChild("email_input").value;
        this.item.full_name = this.getChild("name_input").value;
        if(this.getChild("password_input").value != null){
            this.item.password = this.getChild("password_input").value;
        }

        let response = await app.api.post({
            action: "user_put",
            values: this.item,
            admin_token: app.auth.admin_token
        });
    }

    // async onDatabind(){}
    // async onBeforeEvent(event){}
    // async onEvent(event){}
    // async onAfterEvent(event){}
    // async onBeforeRefresh(){}
    // async onAfterRefresh(){}
    // async onFirstRender(){}
}