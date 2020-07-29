/*
Thank you for using OSPF!
https://github.com/omagerio/ospf
*/

/*
    Set to "false" if you want to test your application without compiling or you don't have nodeJS.
    Set to "true" and run "node tools/compile.js" to generate unified sources. Recommended but not required.
*/
const PRODUCTION_MODE = false;

/*
    The version is used to force a refresh of all files. Update accordingly to your app release.
*/
const VERSION = "0.1";

/**
 * Called when the framework is ready. Assing root to your main component.
 */
async function appInit() {
    let main = new TabbedLayoutExample(); // Simple example with bottom tabs layout
    // let main = new MenuLayoutExample(); // Simple example with bottom tabs layout
    await main.init();
    await root.addChild("main", main);
}