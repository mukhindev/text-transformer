import { BaseNode } from "../BaseNode.js";
import { Transformer } from "../types.js";
type MarkdownCodeNodeState = {
    language: string | null;
    code: string;
};
export declare class MarkdownCodeNode extends BaseNode<MarkdownCodeNodeState> {
    type: string;
    constructor();
    render(): string;
}
export declare const markdownCodeTransformer: Transformer<MarkdownCodeNode>;
export {};
