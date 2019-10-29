class ExamplePanel extends Panel {
	static async Create() {
		let pnl = new DemoPanel();
		pnl.panelName = "examplePanel";
		return pnl;
	}

	async databind() {
		/* ... your databind code here ... */
		super.databind();
	}

	async validate() {
		let validationInfo = await super.validate();
		/*
		... your validation code here ...
		validationInfo.valid = false;
		validationInfo.errors.push("this is an error");
		*/
		return validationInfo;
	}
}