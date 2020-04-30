/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class TextBox extends Component {
    async init() {
        await super.init();
        this.value = "";
        this.placeholder = "";
        this.type = "text";
        this.cssClass = "TextBox";
        this.enterKeyCallback = emptyCallback;
    }

    async parseInput(formData){
        this.value = formData.get(this._id);
        await super.parseInput();
    }

    async keyDown(parameters, jsEvent){
        if(jsEvent.key == "Enter"){
            jsEvent.preventDefault();
            await this.enterKeyCallback(jsEvent.key, jsEvent);
        }
    }
}