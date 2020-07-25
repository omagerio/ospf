/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class TabbedLayoutExample extends TabbedLayout {
    async init({}={}) {
        await super.init(); // always call super.init() first

        for(let i=0; i<5; i++){
            let tab = new Label();
            await tab.init();
            tab.text = "Tab " + i;

            await this.createTab({
                component: tab,
                name: "Tab " + i,
                key: "tab" + i
            });
        }


    }
}