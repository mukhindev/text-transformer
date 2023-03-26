import { BaseNode } from "./BaseNode.js";
import { markdownParagraphTransformer, markdownTableTransformer, markdownCodeTransformer, } from "./transformers/index.js";
function parsePlainTextToNodes(text, transformers) {
    const nodes = [];
    function parsePlainTextToNode(text) {
        if (!text) {
            return;
        }
        for (const options of transformers !== null && transformers !== void 0 ? transformers : []) {
            const matches = text.matchAll(options.regexp);
            const [match] = matches;
            if (match && (match === null || match === void 0 ? void 0 : match.index) === 0) {
                const Node = options.node;
                const node = new Node();
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
export { parsePlainTextToNodes, BaseNode, markdownParagraphTransformer, markdownCodeTransformer, markdownTableTransformer, };
//# sourceMappingURL=index.js.map