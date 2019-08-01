class LoadingPanel extends Panel {
	constructor(parent) {
		super(parent);
		this.panelName = "loadingPanel";
		this.visible = false;
	}

	hide   () {
		document.querySelector("#" + this.id).className = document.querySelector("#" + this.id).className.replace(/loadingPanel-2/g, "");
	};

	show   () {
		document.querySelector("#" + this.id).className += " loadingPanel-2";
	};
}