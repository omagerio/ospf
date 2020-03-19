/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class HelloWorld extends Component {
    async init() {
        await super.init();
        await this.databind();

        let nameControl = new TextBox();
        await nameControl.init();
        nameControl.placeholder = "Add some text here...";
        this.addChild("nameControl", nameControl);

        let listControl = new ListBox();
        await listControl.init();
        listControl.addOption("opzione 1", "1");
        listControl.addOption("opzione 2", "2");
        this.addChild("listControl", listControl);
    }

    async databind() {
        this.names = ["Mario", "Luigi", "Yoshi"];
        await super.databind();
    }

    async addNameClickHandler() {
        let name = this.getChild("nameControl").value;
        if(name != ""){
            this.names.push(name);
        }
        this.getChild("nameControl").value = "";
        await this.refresh();
    }

    async addDollyHandler(){
        let dolly = new HelloWorld();
        await dolly.init();
        this.addChild("dollyComponent", dolly);
        await this.refresh();
    }
}