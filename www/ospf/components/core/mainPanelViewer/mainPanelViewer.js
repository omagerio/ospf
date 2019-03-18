class MainPanelViewer extends Panel {
	constructor() {
		super();
		this.panelName = "mainPanelViewer";
		this.panel = null;
		this.popupPanelViewer = new PopupPanelViewer();
		this.loadingPanel = new LoadingPanel();
	};
}