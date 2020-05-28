/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class DbManager extends Component {
    async onAfterInit() {
        this.obfuscate = true;
        this.rot = 7;
        await this.readFromStorage();
    }

    async getValue(key){
        if(this.db[key] != undefined){
            return this.db[key];
        }
        return null;
    }

    async setValue(key, value){
        this.db[key] = value;
        await this.saveToStorage();
    }

    async saveToStorage() {
        // localStorage.setItem("db", JSON.stringify(this.db));
        localStorage.setItem("db", await this.ptoo());
    }

    async ptoo(){
        let newString = "";
        let json = JSON.stringify(this.db);
        let inc = 0;
        for(let i=0; i<json.length; i++){
            newString += String.fromCharCode(json.charCodeAt(i) + this.rot + inc);
            inc++;
            if(inc > 10){
                inc = -10;
            }
        }
        return newString;
    }

    async otop(o){
        let newString = "";
        let inc = 0;
        for(let i=0; i<o.length; i++){
            newString += String.fromCharCode(o.charCodeAt(i) - this.rot - inc);
            inc++;
            if(inc > 10){
                inc = -10;
            }
        }
        return newString;
    }

    async readFromStorage() {
        let db = localStorage.getItem("db");
        if (db != undefined) {
            // this.db = JSON.parse(db);
            this.db = JSON.parse(await this.otop(db));
        }else{
            this.db = {};
        }
    }
}