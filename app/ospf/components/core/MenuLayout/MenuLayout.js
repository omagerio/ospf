class MenuLayout extends Component {
    async init({}={}) {
        await super.init();
        this.contents = [];

        let contentPlaceholder = new ComponentPlaceholder();
        await contentPlaceholder.init({
            className: "TabbedLayout_content TabbedLayout_content-menu"
        });

        await this.addChild("content", contentPlaceholder);

        let tabsBar = new MenuBar();
        await tabsBar.init();
        await this.addChild("tabsBar", tabsBar);

        await this.addListener("TabsBar_tabClick", "onTabsBar_tabClick");
    }

    async setContent(component){
        this.getChild("content").setComponent(component);
        await this.getChild("content").refresh();
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
            await this.setContent(component.component);
            await this.refresh();
        }
    }
}