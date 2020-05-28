/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class HelloWorld extends Component {
    async onAfterInit() {
        this.addNameClickCallback = emptyCallback;

        // TextBox example
        let nameControl = await TextBox.Create();
        nameControl.placeholder = "Add some text here...";
        nameControl.enterKeyCallback = callback(this, "enterKeyCallback");
        this.addChild("nameControl", nameControl);

        // ListBox example
        let listControl = await ListBox.Create();
        listControl.addOption("opzione 1", "1");
        listControl.addOption("opzione 2", "2");
        this.addChild("listControl", listControl);

        await this.databind(); // we load data needed for this component
    }

    async enterKeyCallback(parameters, event){
        console.log("You pressed: ", parameters, event);
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

        await this.addNameClickCallback();
    }

    async addDollyHandler(){
        let dolly = await HelloWorld.Create();
        this.addChild("dollyComponent", dolly);
        await this.refresh();
    }
}