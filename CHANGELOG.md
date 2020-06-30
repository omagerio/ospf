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