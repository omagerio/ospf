const VERSION = "1.0";

function appInit() {
	/* mainPanelViewer is the root of your application. It is globally accessible */
	mainPanelViewer.panel = new DemoPanel(mainPanelViewer);
	mainPanelViewer.refresh();
}