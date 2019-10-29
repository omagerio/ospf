class MainPanelViewer extends Panel {
	static async Create() {
		let pnl = new MainPanelViewer();
		pnl.panelName = "mainPanelViewer";
		await pnl.addChild(PopupPanelViewer.Create(), "popupPanelViewer");
		await pnl.addChild(LoadingPanel.Create(), "loadingPanel");
		MainPanelViewer.singleton = pnl;
		return pnl;
	}

	static getInstance() {
		return MainPanelViewer.singleton;
	}

	async setPanel(panel){
		await this.addChild(panel, "panel", true);
	}
}