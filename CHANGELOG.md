# 1.11
- Added animations for menus
- Fixed placeholder bugs
- Refactored event listeners:
    Added a new method "onEvent" at component level. When an event is fired this method is called with the event as the only parameter.
    Added new methods:
    ```javascript
    async onBeforeEvent(event) { }
    async onEvent(event) { }
    async onAfterEvent(event) { }
    ```
- Added "getChildren" core method
- Removed "Event Manager" component
- Added worker for future implementation
- Updated README

# 1.10
- Added TabbedLayoutExample
- `renderEvent(domEventName, eventName, parameters)` has been reworked to automatically print the domEventName
- fixed an error with `addChild(null)`
- fixed styling errors with names
- added ComponentPlaceholder to core components

# 1.9
- Optimized loading in debug environment
- Fixed compilation
- addChild() and removeChild() are now ASYNC
- added onBeforeReplace() and onAfterReplace() when the component is being replaced (addChild, removeChild)

# 1.8
- integrated dbManager and eventManager in root
- restored old init() method instead of Create() until a better solution is found
- implemented events instead of callbacks
- fixed component refresh bug
- updated HelloWorld example

# 1.7
- Added EventManager
- Removed error when trying to refresh a not rendered component. Now it will silently fail.

# 1.6
- Refactored component creation. Component are now created with:
```javascript
let myComponent = await ComponentClass.Create({
    property1: 123,
    property2: "abc"
});
```

- Properties are assigned automatically to the component.

- `init()` has been replaced with `onAfterInit` in custom components:
```javascript
class HelloWorld extends Component {
    async onAfterInit() {
        this.addNameClickCallback = emptyCallback;
        ...
```

- It is no longer needed to call `super.init()` inside this new method.

# 1.5
created changelog