/**
 * App entry point
 */
class App extends Component {
    async init({ } = {}) {
        await super.init();
        this.env = (await this.loadFile(".env")).trim();

        let view = await this.pushChild("view", new TabbedLayoutExample());
        await view.init();
    }

    /*
    onEvent(event) {
        if(event.name == "myEvent"){

        }
    }
    */
}