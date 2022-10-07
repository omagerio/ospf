/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class CheckBoxBase extends Component {
    async init() {
        await super.init();
        this.value = 0;
    }

    async click(){
        this.value = 1-this.value;
        await this.refresh();
        await this.fireEvent("CheckBox_click", this);
    }
}