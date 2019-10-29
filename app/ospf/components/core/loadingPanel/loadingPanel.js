class LoadingPanel extends Panel {
	static async Create() {
		let pnl = new LoadingPanel();
		pnl.panelName = "loadingPanel";
		pnl.visible = false;
		return pnl;
	}

	hide() {
		document.querySelector("#" + this.id).className = document.querySelector("#" + this.id).className.replace(/loadingPanel-2/g, "");
	};

	show() {
		document.querySelector("#" + this.id).className += " loadingPanel-2";
	};
}