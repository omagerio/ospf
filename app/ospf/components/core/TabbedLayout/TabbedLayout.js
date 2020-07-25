class TabbedLayout extends Component {
    async init({}={}) {
        await super.init();
        this.contents = [];

        let tabsBar = new TabsBar();
        await tabsBar.init();

        await this.addChild("content", null);
        await this.addChild("tabsBar", tabsBar);

        await this.addListener("TabsBar_tabClick", "onTabsBar_tabClick");


    }

    async createTab({component, name, icon, key}){
        this.getChild("tabsBar").createTab({
            name: name,
            icon: icon,
            key: key
        });

        this.contents.push({
            component: component,
            key: key
        });
    }

    async onTabsBar_tabClick(event){
        if(event.sender == this.getChild("tabsBar")){
            let component = this.contents.find(item => item.key == event.parameters.key);
            await this.addChild("content", component.component);
            await this.refresh();
        }
    }
}