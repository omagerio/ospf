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
    }

    async onEvent(event){
        if(event.name == "TabsBar_tabClick"){
            if(event.sender == this.getChild("tabsBar")){
                let component = this.contents.find(item => item.key == event.parameters.key);
                await this.setContent(component.component);
            }
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