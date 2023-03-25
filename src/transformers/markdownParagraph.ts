import { BaseNode } from "../BaseNode.js";
import { Transformer } from "../types.js";

type MarkdownParagraphNodeState = { content: string };

export class MarkdownParagraphNode extends BaseNode<MarkdownParagraphNodeState> {
  type = "markdown-paragraph";

  constructor() {
    super();
  }

  render() {
    const content = this.state.content.replace(/\s\s\n/g, "<br/>");
    return `<div class="paragraph">${content.trim()}</div>`;
  }
}

export const markdownParagraphTransformer: Transformer<MarkdownParagraphNode> =
  {
    regexp: /[\s\S]+?\n{2,}|[\s\S]+/g,
    node: MarkdownParagraphNode,
    defineState: (match) => {
      return {
        content: match[0],
      };
    },
  };
