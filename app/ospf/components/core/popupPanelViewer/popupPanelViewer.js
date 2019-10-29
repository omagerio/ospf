class PopupPanelViewer extends Panel {
	static async Create() {
		let pnl = new PopupPanelViewer();
		pnl.panelName = "popupPanelViewer";
		pnl.visible = false;
		return pnl;
	}

	async setPanel(panel){
		await this.addChild(panel, "panel", true);
	}

	show() {
		document.getElementById(this.id).style.bottom = "0%";
	};

	hide() {
		document.getElementById(this.id).style.bottom = "100%";
	}
}