/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class HelloWorld extends Component {
    async init() {
        await super.init();
        await this.databind();
    }

    async databind() {
        this.names = ["Mario", "Luigi", "Yoshi"];
        await super.databind();
    }

    async addNameClickHandler() {
        let name = qs("#" + this.createId("nameInput")).value;
        if(name != ""){
            this.names.push(name);
        }
        await this.refresh();
    }

    async onRefresh(){
        qs("#" + this.createId("addInput")).addEventListener("click", ()=>{
            this.addNameClickHandler();
        });

        qs("#" + this.createId("createDollyInput")).addEventListener("click", async ()=>{
            let dolly = new HelloWorld();
            await dolly.init();
            this.addChild(dolly, "dollyComponent");
            await this.refresh();
        });
    }
}