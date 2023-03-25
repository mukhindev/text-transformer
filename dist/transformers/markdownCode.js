import { BaseNode } from "../BaseNode.js";
export class MarkdownCodeNode extends BaseNode {
    constructor() {
        super();
        this.type = "markdown-code";
    }
    render() {
        return `<div><pre><code>TODO: Format to code [${this.state.language}]: ${this.state.code}</code></pre></div>`;
    }
}
export const markdownCodeTransformer = {
    regexp: /```\s*(.*)\n([\s\S]+)```\n*/g,
    node: MarkdownCodeNode,
    defineState: (match) => {
        const [_, language, code] = match;
        return {
            language,
            code,
        };
    },
};
//# sourceMappingURL=markdownCode.js.map