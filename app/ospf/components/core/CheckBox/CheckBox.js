/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class CheckBox extends Component {
    async onAfterInit() {
        this.value = 0;
        this.activeImageUrl = "ospf/assets/images/core/check_on.png";
        this.inactiveImageUrl = "ospf/assets/images/core/check_off.png";
        this.clickCallback = emptyCallback;
    }

    async click(){
        this.value = 1-this.value;
        await this.refresh();
        await this.clickCallback();
    }
}