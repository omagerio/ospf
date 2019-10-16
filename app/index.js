const VERSION = "1.0";

async function appInit() {
	/* mainPanelViewer is the root of your application. It is globally accessible */
	await mainPanelViewer.addChild(DemoPanel.Create(), "panel");
	mainPanelViewer.refresh();
}