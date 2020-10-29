/**
 * App entry point
 */
class App extends Component {
    async init({}={}) {
        await super.init(); // always call super.init() first

        // Setting up local database. See: https://dexie.org/
        app.dbManager.setDbName("demoApp");
        await app.dbManager.setDbStructure({});

        // Create the first component to be rendered inside the app
        let layout = await this.addChild("layout", new MenuLayoutExample());
        await layout.init();
    }
}