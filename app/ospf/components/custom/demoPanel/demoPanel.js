class DemoPanel extends Panel {
	static async Create() {
		let pnl = new DemoPanel();
		pnl.panelName = "demoPanel";
		pnl.counter = 0;
		await pnl.addChild(PanelViewer.Create(), "panelViewer");
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
		await mainPanelViewer.child("popupPanelViewer").addChild(DemoPanel.Create(), "panel");
		await mainPanelViewer.child("popupPanelViewer").refresh();
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