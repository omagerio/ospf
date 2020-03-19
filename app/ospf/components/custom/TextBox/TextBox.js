/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class TextBox extends Component {
    async init() {
        await super.init();
        this.value = "";
        this.placeholder = "";
    }

    async parseInput(formData){
        this.value = formData.get(this._id);
        await super.parseInput();
    }

}