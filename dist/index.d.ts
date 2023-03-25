import { BaseNode } from "./BaseNode.js";
import type { Transformer } from "./types.js";
declare function parsePlainTextToNodes(text: string, transformers: Transformer<any>[]): BaseNode<unknown, string>[];
export { parsePlainTextToNodes, BaseNode };
export type { Transformer };
