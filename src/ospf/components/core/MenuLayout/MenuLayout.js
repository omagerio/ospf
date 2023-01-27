class MenuLayout extends Component {
    async init({}={}) {
        await super.init();
        this.tabs = [];

        let contentWrapper = await this.addChild("content", new ComponentWrapper());
        await contentWrapper.init({
            className: "TabbedLayout_content TabbedLayout_content-menu"
        });

        let tabsBar = await this.addChild("tabsBar", new MenuBar());
        await tabsBar.init();
    }

    async onEvent(event){
        if(event.name == "TabsBar_tabClick"){
            if(event.sender == this.getChild("tabsBar")){
                let tab = this.tabs.find(item => item.key == event.parameter.key);
                await this.getChild("content").setComponent(tab.component);
            }
        }
    }

    async addTab({component, name, icon, key}){
        await this.getChild("tabsBar").addTab({
            name: name,
            icon: icon,
            key: key
        });

        this.tabs.push({
            component: component,
            key: key
        });
    }

    async setActiveTabByKey(key){
        let tab = this.getChild("tabsBar").tabs.find(item => item.key == key);
        await this.getChild("tabsBar").tabClick(tab.id);
    }
}