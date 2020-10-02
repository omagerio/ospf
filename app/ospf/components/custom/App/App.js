/**
 * App entry point
 */
class App extends Component {
    async init({}={}) {
        await super.init(); // always call super.init() first

        let layout = await this.addChild("layout", new TabbedLayoutExample());
        await layout.init();
    }
}