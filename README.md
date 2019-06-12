# OSPF, a Javascript single-page framework

## Overwiew ##
OSPF makes easy to create single pages JavaScript apps, by using panels as stand-alone rendered objects, in a MVC-way.

## Get started ##
Clone this repository inside a folder accessible by your webserver:

` git clone https://github.com/omagerio/ospf.git `

Visit the URL of that folder, for example ` http://localhost/myfolder `

Et voilà. The framework is up and running strong. Easy right?

# Application flow #
The application starts from the `index.js` file you can find in the root of the project. A function named `appInit` will be called when the framework is ready. For example, the default:

```
function appInit() {
	mainPanelViewer.panel = new HomePage(mainPanelViewer);
	mainPanelViewer.refresh();
}
```

This code should be self explanatory. 

> The `mainPanelViewer` is a special panel, globally accessible, and it is the root of your application. The `panel` property represents the panel it must show when rendered. Read more about panels below.

Ok now the `HomePage` panel will be rendered when you start the application. 

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

The HTML file represents the template of the panel. Let's see the default tpl:
```
<div id="<%- _self.id %>" class="examplePanel">
	hello world
</div>
```

Here you place the HTML of your panel. Be sure to set the `id` attribute of the tag (can be any tag you want, here is a `div`) to `<%- _self.id %>` to allow the framework to recognize the panel later on. 

> As you can see, this framework uses the extraordinary `ejs` library. Find more here: https://ejs.co/

### Panel functions ###
Panels have different methods you must know:
- `getThis()`: returns a unique reference of the panel you can use in delayed actions. For example: `onclick="<%- _self.getThis() %>.clickHandler()"`
- `databind()`: loads panel data. You _must_ override this function (and call `super.databind()`) inside your panel when you have to load data required from your tpl.
- `refresh()`: refreshes the panel's template. You should never override this method.
- `update()`: calls `refresh()` and `databind()` sequentially. You should never override this method.
- `getHtml()`: returns the HTML of the panel. Use this method inside your template to render children panels.

Inside the template file, you can use `_self` to reference your panel.

### Core panels ###
OSPF comes with different core panels that may suit your needs:
- PanelViewer: displays another panel programatically. 
- PopupPanelViewer: displays another panel inside a popup (modal)
- LoadingPanel: displays a loading icon for long running tasks

### That's all folks ###
This is everything you must know if you want to start using OSPF!

Happy coding

> This README is work in progress

