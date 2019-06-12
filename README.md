# OSPF, a Javascript single-page framework

## Overwiew ##
OSPF makes easy to create single pages JavaScript apps, by using panels as stand-alone rendered objects, in a MVC-way.

## Get started ##
Clone this repository inside a folder accessible by your webserver:

` git clone https://github.com/omagerio/ospf.git `

Visit the URL of that folder, for example ` http://localhost/myfolder `

Et voilà. The framework is up and running strong. Easy right?

## Creating panels ##
An example panel was made for you to start with. 
You can find it inside `ospf/components/custom/_examplePanel`. You can even edit the `homePage` if you want.
For now, lets use the example panel.

- Clone the `_examplePanel` folder with a new name, `myPanel`

Inside this folder, you can find a JS and an HTML file. The js is, surprisingly, the logic of this panel. The HTML is the template.

- Rename both files to `myPanel.js` and `myPanel.html`

- Open the `myPanel.js`

Inside this file you can find a class extending the `Panel` class. 

- Rename this class to what you want, for example `MyPanel`, and set `this.panelName` name to `myPanel`, like this:
```
class MyPanel extends Panel {
	constructor(parent) {
		super(parent);
		this.panelName = "myPanel";
	}
}
```

You are almost there. Now we have to tell OSPF about your new panel, but do not worry, it is faster than you think.

- Open `ospf/components.js` and add `myPanel` to the `custom` array of the `components` object. Like this: 
```
let components = {
	"core": [
		"panel",
		"panelViewer",
		"popupPanelViewer",
		"mainPanelViewer",
		"loadingPanel",
		"eventHelper"
	],
	"custom": [
		"homePage",
    "myPanel"
	]
};
```

Well done, you can now start using your panel in your application, let's see how!

WORK IN PROGRESS
