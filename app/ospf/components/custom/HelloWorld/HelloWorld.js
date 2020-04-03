/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class HelloWorld extends Component {
    async init() {
        await super.init(); // always call init method of super component first

        // TextBox example
        let nameControl = new TextBox();
        await nameControl.init(); // always call init method of every component after creation
        nameControl.placeholder = "Add some text here...";
        this.addChild("nameControl", nameControl);

        // ListBox example
        let listControl = new ListBox();
        await listControl.init(); // always call init method of every component after creation
        listControl.addOption("opzione 1", "1");
        listControl.addOption("opzione 2", "2");
        this.addChild("listControl", listControl);

        await this.databind(); // we load data needed for this component
    }

    async databind() {
        this.names = ["Mario", "Luigi", "Yoshi"];
        await super.databind();  // Always call super.databind()
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
        await dolly.init(); // always call init method of every component after creation
        this.addChild("dollyComponent", dolly);
        await this.refresh();
    }
}