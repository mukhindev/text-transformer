import { BaseNode } from "../BaseNode.js";
import { Transformer } from "../types.js";

type MarkdownCodeNodeState = { language: string | null; code: string };

export class MarkdownCodeNode extends BaseNode<MarkdownCodeNodeState> {
  type = "markdown-code";

  constructor() {
    super();
  }

  render() {
    return `<div><pre><code>TODO: Format to code [${this.state.language}]: ${this.state.code}</code></pre></div>`;
  }
}

export const markdownCodeTransformer: Transformer<MarkdownCodeNode> = {
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
