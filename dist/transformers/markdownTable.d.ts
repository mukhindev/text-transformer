import { BaseNode } from "../BaseNode.js";
import { Transformer } from "../types.js";
type ColDef = {
    content: string;
    align: string;
};
type CellData = Record<number, string>;
type MarkdownTableNodeState = {
    colDefs: Record<number, ColDef>;
    rowData: CellData[];
};
export declare class MarkdownTableNode extends BaseNode<MarkdownTableNodeState> {
    type: string;
    constructor();
    render(): string;
}
export declare const markdownTableTransformer: Transformer<MarkdownTableNode>;
export {};
