/*
Thank you for using OSPF!
https://github.com/omagerio/ospf
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