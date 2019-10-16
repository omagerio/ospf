class ExamplePanel extends Panel {
	constructor() {
		/* required settings */
		super();
		this.panelName = "examplePanel";
		/* required settings */
	}

	async databind() {
		/* ... your databind code here ... */
		super.databind();
	}

	validate() {
		let validationInfo = super.validate();
		/*
		... your validation code here ...
		validationInfo.valid = false;
		validationInfo.errors.push("this is an error");
		*/
		return validationInfo;
	}
}