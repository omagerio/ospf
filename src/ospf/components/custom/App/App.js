/**
 * App entry point
 */
class App extends Component {
    async init({ } = {}) {
        await super.init();
		this.env = (await this.loadFile("env")).trim();

        /* prevents browser back button */
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', async () => {
            history.pushState(null, null, document.URL);
            this.fireEvent("intent_back");
        });
        /*--------*/

        this.env = (await this.loadFile("env")).trim();

        let api_url = "";
        this.api = new ApiHelper(api_url);
        this.auth = { admin_token: "ea4b40de-32b2-11ed-ba5d-0800277dcd5e" };

        let view = await this.pushChild("view", new ItemListView());
        await view.init();

        await view.databind();
    }


    async onEvent(event) {
        if (event.name == "intent_openItemEditView") {
            if (event.parameter.type == "item") {
                let view = new ItemEditView();
                await this.pushChild("view", view);
                await view.init({ item: event.parameter.item });
                await this.update();
            }
        }

        if (event.name == "intent_openItemListView") {
            if (event.parameter.type == "item") {
                let view = new ItemListView();
                await this.pushChild("view", view);
                await view.init();
                await this.update();
            }
        }

        if (event.name == "intent_back") {
            await this.popChild("view");
            await this.refresh();
        }
    }

}