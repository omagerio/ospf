class PopupPanelViewer extends Panel {
	static async Create() {
		let pnl = new PopupPanelViewer();
		pnl.panelName = "popupPanelViewer";
		pnl.panel = null;
		pnl.visible = false;
		return pnl;
	}

	show() {
		document.getElementById(this.id).style.bottom = "0%";
	};

	hide() {
		document.getElementById(this.id).style.bottom = "100%";
	}
}