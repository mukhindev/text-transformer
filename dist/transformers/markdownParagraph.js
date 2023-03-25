import { BaseNode } from "../BaseNode.js";
export class MarkdownParagraphNode extends BaseNode {
    constructor() {
        super();
        this.type = "markdown-paragraph";
    }
    render() {
        const content = this.state.content.replace(/\s\s\n/g, "<br/>");
        return `<div class="paragraph">${content.trim()}</div>`;
    }
}
export const markdownParagraphTransformer = {
    regexp: /[\s\S]+?\n{2,}|[\s\S]+/g,
    node: MarkdownParagraphNode,
    defineState: (match) => {
        return {
            content: match[0],
        };
    },
};
//# sourceMappingURL=markdownParagraph.js.map