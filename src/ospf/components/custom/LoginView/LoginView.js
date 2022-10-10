class LoginView extends Component {
    async init({ } = {}) {
        await super.init();

        let email_input = await this.addChild("email_input", new TextBox());
        await email_input.init();

        let password_input = await this.addChild("password_input", new TextBox());
        await password_input.init();
        password_input.type = "password";

        let local_admin_token = localStorage.getItem("admin_token");
        if(local_admin_token != null){
            let check_result = await app.api.get({
                action: "user_list",
                auth: {
                    admin_token: local_admin_token
                }
            });

            if(check_result.errors.length == 0){
                await this.fireEvent("intent_openItemListView", { type: "user" });
            }
        }
    }

    async loginClick() {
        let response = await app.api.post(
            {
                action: "admin_login",
                filters: {
                    email: this.getChild("email_input").value,
                    password: this.getChild("password_input").value
                }
            }
        );

        if (response.results.length > 0) {
            app.auth = response.results[0];
            localStorage.setItem("admin_token", app.auth.login_token);
            await this.fireEvent("intent_openItemListView", { type: "item" });
        }else{
            alert("Credenziali errate");
        }
    }

    // async onDatabind(){}
    // async onBeforeEvent(event){}
    // async onEvent(event){}
    // async onAfterEvent(event){}
    // async onBeforeRefresh(){}
    // async onAfterRefresh(){}
    // async onFirstRender(){}
}