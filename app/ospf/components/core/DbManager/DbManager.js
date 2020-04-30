/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class DbManager extends Component {
    async init() {
        await super.init(); // always call init method of super component first
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
        localStorage.setItem("db", JSON.stringify(this.db));
    }

    async readFromStorage() {
        let db = localStorage.getItem("db");
        if (db != undefined) {
            this.db = JSON.parse(db);
        }else{
            this.db = {};
        }
    }
}