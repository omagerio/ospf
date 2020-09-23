/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class HelloWorld extends Component {
    async init() {
        await super.init();

        // TextBox example
        let nameControl = new TextBox();
        await nameControl.init();
        nameControl.placeholder = "Add some text here...";
        await this.addChild("nameControl", nameControl);

        // ListBox example
        let listControl = new ListBox();
        await listControl.init();
        listControl.addOption("opzione 1", "1");
        listControl.addOption("opzione 2", "2");
        await this.addChild("listControl", listControl);

        await this.databind(); // we load data needed for this component
    }

    async onEvent(event){
        if(event.name == "TextBox_enterKey" && event.sender == this.getChild("nameControl")){
            event.parameters.event.preventDefault();
            await this.addNameClickHandler();
        }
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

        // fire event to signaling other components
        await this.fireEvent("HelloWorld_addNameClickHandler", this);
    }

    async addDollyHandler(){
        let dolly = new HelloWorld();
        await dolly.init();
        await this.addChild("dollyComponent", dolly);
        await this.refresh();
    }
}