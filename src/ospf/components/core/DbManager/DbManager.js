/**
 * Example component. Add your custom components to ospf/components_custom.js to use them.
 */
class DbManager extends Component {
    async init() {
        await super.init();
        this.db = new Dexie("ospf");
        this.dexie = this.db; // alias
    }

    setDbName(name){
        this.db = new Dexie(name);
    }

    async setDbStructure(structure){
        let intVersion = getVersionInt();
        structure._keyval = "id,val";
        await this.db.version(intVersion).stores(structure);
    }

    async getValue(id){
        let val = await this.db._keyval.get(id);
        if(val != undefined){
            return val.val;
        }
        return null;
    }

    async setValue(id, val){
        await this.db._keyval.put({id, val});
    }
}