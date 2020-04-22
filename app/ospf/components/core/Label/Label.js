/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class Label extends Component {
    async init() {
        await super.init();
        this.text = "";
    }
}