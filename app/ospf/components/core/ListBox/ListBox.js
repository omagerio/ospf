/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class ListBox extends Component {
    async init() {
        await super.init();
        this.value = null;
        this.options = [];
        this.cssClass = "Listbox";
        this.otherAttributes = "";
    }

    addOption(name, value) {
        this.options.push({
            name: name,
            value: value
        });
    }

    async onParseInput(formData) {
        this.value = formData.get(this._id);
    }

    async change() {
        await this.fireEvent("ListBox_change", this);
    }
}