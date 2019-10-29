class PanelViewer extends Panel {
	 static async Create() {
		let pnl = new PanelViewer();
		pnl.panelName = "panelViewer";
		return pnl;
	}

	async setPanel(panel){
		await this.addChild(panel, "panel", true);
	}
}