class DemoPanel extends Panel {

	/* initialize the panel */
	constructor(parent) {
		/* required settings */
		super(parent);
		this.panelName = "demoPanel";
		/* ----------------- */


		this.counter = 0;
		this.panelViewer = new PanelViewer(this);
	}

	button1Click(){
		alert("You clicked");
	}

	button2Click(){
		this.counter++;
		this.refresh();
	}

	popupButtonClick(){
		mainPanelViewer.popupPanelViewer.panel = new DemoPanel(this);
		mainPanelViewer.popupPanelViewer.refresh();
		mainPanelViewer.popupPanelViewer.show();
	}

	showPanelInViewer(){
		let newPanel = new DemoPanel(this);
		this.panelViewer.panel = newPanel;
		this.panelViewer.refresh();
	}

	onRefresh(){
		super.onRefresh();
		qs("#"+this.id+"_button5").addEventListener("click", ()=>{
			alert("Click!");
		});
	}
}