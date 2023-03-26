export class BaseNode {
    constructor() {
        this.theme = {};
        this.state = undefined;
        this.type = "";
    }
    setState(state) {
        this.state = state;
        return this;
    }
    setTheme(theme) {
        this.theme = theme;
        return this;
    }
    get className() {
        var _a;
        return (_a = this.theme[this.type]) !== null && _a !== void 0 ? _a : this.type;
    }
}
//# sourceMappingURL=BaseNode.js.map