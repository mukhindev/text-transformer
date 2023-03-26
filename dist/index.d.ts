import { BaseNode } from "./BaseNode.js";
import type { Transformer } from "./types.js";
import { markdownParagraphTransformer, markdownTableTransformer, markdownCodeTransformer } from "./transformers/index.js";
declare function parsePlainTextToNodes(text: string, transformers: Transformer<any>[]): BaseNode<unknown, string>[];
export { parsePlainTextToNodes, BaseNode, markdownParagraphTransformer, markdownCodeTransformer, markdownTableTransformer, };
export type { Transformer };
