/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class AjaxRequest extends Component {
    async onAfterInit() {
        this.url = "";
        this.method = "GET";
        this.data = "";
        this.headers = [{name: "Content-type", value: "multipart/form-data"}];
    }

    async exec() {
        return new Promise(
            (resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open(this.method, this.url);
                for(let header of this.headers){
                    xhr.setRequestHeader(header.name, header.value);
                }
                xhr.onreadystatechange = () => {
                    if (xhr.readyState == 4) {
                        resolve(xhr.responseText);
                    }
                };
                xhr.send(this.data);
            }
        );
    }
}