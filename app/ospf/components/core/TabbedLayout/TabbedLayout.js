class TabbedLayout extends Component {
    async init({}={}) {
        await super.init();
        this.contents = [];

        let tabsBar = await this.addChild("tabsBar", new TabsBar());
        await tabsBar.init();

        let contentPlaceholder = await this.addChild("content", new ComponentPlaceholder());
        await contentPlaceholder.init({
            className: "TabbedLayout_content"
        });
    }

    async onEvent(event){
        if(event.name == "TabsBar_tabClick" && event.sender == this.getChild("tabsBar")){
            let component = this.contents.find(item => item.key == event.parameter.key);
            // await this.addChild("content", component.component);
            await this.setContent(component.component);
        }
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
}