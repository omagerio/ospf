const VERSION = "1.0";

function appInit() {
	mainPanelViewer.panel = new HomePage(mainPanelViewer);
	mainPanelViewer.refresh();
}