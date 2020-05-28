/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class ListBox extends Component {
    async onAfterInit() {
        this.value = null;
        this.options = [];
		this.changeCallback = emptyCallback;
        this.cssClass = "Listbox";
        this.otherAttributes = "";
    }

    addOption(name, value){
        this.options.push({
            name: name,
            value: value
        });
    }

    async parseInput(formData){
        this.value = formData.get(this._id);
        await super.parseInput();
    }

async change(){
        await this.changeCallback(this);
    }}