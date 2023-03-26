import { BaseNode } from "./BaseNode.js";
import type { Transformer } from "./types.js";

import {
  markdownParagraphTransformer,
  markdownTableTransformer,
  markdownCodeTransformer,
} from "./transformers/index.js";

function parsePlainTextToNodes(text: string, transformers: Transformer<any>[]) {
  const nodes: BaseNode<unknown>[] = [];

  function parsePlainTextToNode(text: string) {
    if (!text) {
      return;
    }

    for (const options of transformers ?? []) {
      const matches = text.matchAll(options.regexp);
      const [match] = matches;

      if (match && match?.index === 0) {
        const Node = options.node;
        const node = new Node() as BaseNode<unknown>;
        const state = options.defineState(match);

        node.setState(state);
        nodes.push(node);

        parsePlainTextToNode(text.replace(match[0], ""));

        break;
      }
    }
  }

  parsePlainTextToNode(text);

  return nodes;
}

export {
  parsePlainTextToNodes,
  BaseNode,
  markdownParagraphTransformer,
  markdownCodeTransformer,
  markdownTableTransformer,
};

export type { Transformer };
