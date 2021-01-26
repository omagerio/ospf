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

    async onParseInput(formData){
        this.value = formData.get(this._id);
    }

    async keyDown(parameter, jsEvent){
        if(jsEvent.key == "Enter"){
            jsEvent.preventDefault();
            await this.fireEvent("TextBox_enterKey", {
                event: jsEvent
            });
        }
    }
}