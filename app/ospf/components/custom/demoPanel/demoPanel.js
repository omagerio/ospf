class DemoPanel extends Panel {
	static async Create() {
		let pnl = new DemoPanel();
		pnl.panelName = "demoPanel";
		pnl.counter = 0;
		let pw = new PanelViewer();
		pnl.addChild(pw, "panelViewer");
		return pnl;
	}

	async button1Click() {
		alert("You clicked");
	}

	async button2Click() {
		this.counter++;
		this.refresh();
	}

	async popupButtonClick() {
		mainPanelViewer.child("popupPanelViewer").addChild(DemoPanel.Create(), true);
		mainPanelViewer.child("popupPanelViewer").refresh();
		mainPanelViewer.child("popupPanelViewer").show();
	}

	async showPanelInViewer() {
		this.child("panelViewer").addChild(DemoPanel.Create(), "panel");
		this.child("panelViewer").refresh();
	}

	async onRefresh() {
		super.onRefresh();
		qs("#" + this.id + "_button5").addEventListener("click", () => {
			alert("Click!");
		});
	}
}