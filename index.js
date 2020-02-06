/*
Thank you for using OSPF!
https://github.com/omagerio/ospf
*/

/*
    Set to false if you want to test your application without compiling.
    Set to true and run node tools/compile.js to generate unified sources.
*/
const PRODUCTION_MODE = false;

/*
    This version is used to force a refresh of all files. Update accordingly to your app release.
*/
const VERSION = "0.1";

/**
 * Called when the framework is ready. Assing root to your main component.
 */
async function appInit() {
    root = new HelloWorld();
    await root.init();
    return root.render();
}