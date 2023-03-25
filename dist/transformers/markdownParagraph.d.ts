import { BaseNode } from "../BaseNode.js";
import { Transformer } from "../types.js";
type MarkdownParagraphNodeState = {
    content: string;
};
export declare class MarkdownParagraphNode extends BaseNode<MarkdownParagraphNodeState> {
    type: string;
    constructor();
    render(): string;
}
export declare const markdownParagraphTransformer: Transformer<MarkdownParagraphNode>;
export {};
