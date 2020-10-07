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
    }

    async parseInput(formData){
        this.value = formData.get(this._id);
        await super.parseInput();
    }

    async keyDown(parameter, jsEvent){
        if(jsEvent.key == "Enter"){
            await this.fireEvent("TextBox_enterKey", {
                event: jsEvent
            });
            jsEvent.preventDefault();
        }

    }
}