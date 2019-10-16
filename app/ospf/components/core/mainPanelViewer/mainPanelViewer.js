class MainPanelViewer extends Panel {
	static async Create() {
		let pnl = new MainPanelViewer();
		pnl.panelName = "mainPanelViewer";
		pnl.panel = null;
		await pnl.addChild(PopupPanelViewer.Create(), "popupPanelViewer");
		await pnl.addChild(LoadingPanel.Create(), "loadingPanel");
		MainPanelViewer.singleton = pnl;
		return pnl;
	}

	static getInstance() {
		return MainPanelViewer.singleton;
	}
}