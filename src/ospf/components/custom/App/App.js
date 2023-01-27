/**
 * App entry point
 */
class App extends Component {
    async init({ } = {}) {
        await super.init();
        this.env = (await this.loadFile("env?t=" + Date.now())).trim();

        let view = await this.pushChild("view", new MenuLayoutExample());
        await view.init();
    }

    /*
    onEvent(event) {
        if(event.name == "myEvent"){

        }
    }
    */
}