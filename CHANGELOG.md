# 1.6
- Refactored component creation. Component are now created with:
`let myComponent = await ComponentClass.Create();`
- `init()` has been replaced with `onAfterInit` in custom components:
```javascript
class HelloWorld extends Component {
    async onAfterInit() {
        this.addNameClickCallback = emptyCallback;
        ...
```
It is no longer needed to call `super.init()` inside this new method.

# 1.5
created changelog