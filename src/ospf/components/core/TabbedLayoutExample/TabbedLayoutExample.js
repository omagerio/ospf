class TabbedLayoutExample extends TabbedLayout {

    async init({ } = {}) {
        await super.init(); // always call super.init() first

        for (let i = 0; i < 4; i++) {

            // Create a component that will be shown at the relative tab
            // Here we are using a Label only for testing purposes. Create your component instead!
            let tabContent = new Label();
            await this.addChild("tabContent" + i, tabContent);
            await tabContent.init();
            tabContent.text = `
            <div class="TabbedLayoutExample_content">
                <div class="TabbedLayoutExample_content_title">Tab `+ (i) + `</div>
                <div class="TabbedLayoutExample_content_description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>
            </div>`;

            // Create a tab
            await this.createTab({
                component: tabContent,
                name: "Tab " + i,
                key: "tab" + i
            });

        }

        // Select the first tab by default
        await this.setActiveTabByKey("tab0");
    }

}