class PopupPanelViewer extends Panel {
	constructor(parent){
		super(parent);
		this.panelName = "popupPanelViewer";
		this.panel = null;
		this.visible = false;
	}

	show() {
		document.getElementById(this.id).style.bottom = "0%";
	};

	hide(){
		document.getElementById(this.id).style.bottom = "100%";
	}
}