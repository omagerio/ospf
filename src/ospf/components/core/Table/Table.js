class Table extends Component {
    async init() {
        await super.init();
        this.columns = [];
        this.datasource = [];
        this.cssClass = "Table";
    }

    /**
     *
     * @param {TableColumn} tableColumn
     */
    addColumn(tableColumn){
        this.columns.push(tableColumn);
    }
}


class TableColumn{
    constructor(title, jsContent){
        this.title = title;
        this.jsContent = jsContent;
    }

    getHtml(item){
        let html;
        eval("html = " + this.jsContent);
        return html;
    }
}