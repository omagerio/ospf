class TabbedLayout extends Component {
    async init({}={}) {
        await super.init();
        this.contents = [];

        let tabsBar = new TabsBar();
        await tabsBar.init();

        let contentPlaceholder = new ComponentPlaceholder();
        await contentPlaceholder.init({
            className: "TabbedLayout_content"
        });

        await this.addChild("content", contentPlaceholder);
        await this.addChild("tabsBar", tabsBar);

        await this.addListener("TabsBar_tabClick", "onTabsBar_tabClick");
    }

    async setContent(component){
        await this.getChild("content").setComponent(component);
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

    async setActiveTabByKey(key){
        let tab = this.getChild("tabsBar").tabs.find(item => item.key == key);
        await this.getChild("tabsBar").tabClick(tab.id);
    }

    async onTabsBar_tabClick(event){
        if(event.sender == this.getChild("tabsBar")){
            let component = this.contents.find(item => item.key == event.parameters.key);
            // await this.addChild("content", component.component);
            await this.setContent(component.component);
        }
    }
}