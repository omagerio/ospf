class MainPanelViewer extends Panel {
	constructor() {
		super();
		this.panelName = "mainPanelViewer";
		this.panel = null;
		this.popupPanelViewer = new PopupPanelViewer(this);
		this.loadingPanel = new LoadingPanel(this);
		MainPanelViewer.singleton = this;
	};

	static getInstance(){
		return MainPanelViewer.singleton;
	}
}