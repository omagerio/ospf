class TabsBar extends Component {
    async init() {
        await super.init();
        this.tabs = [];
        this.activeTabId = 0;
    }

    async addTab({ name, icon, key }) {
        let tab = { name, id: uuid(), icon, key };
        this.tabs.push(tab);
    }

    async tabClick(tabId) {
        if (tabId == undefined) {
            tabId = this.tabs[0].id;
        }
        let tab = this.tabs.find((item) => { return item.id == tabId });
        this.activeTabId = tab.id;
        await this.refresh();
        await this.fireEvent("TabsBar_tabClick", tab);
    }
}