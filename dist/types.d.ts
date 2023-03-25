import { BaseNode } from "./BaseNode.js";
export type Transformer<T extends BaseNode<unknown, unknown>> = {
    regexp: RegExp;
    node: {
        new (...args: ConstructorParameters<typeof BaseNode<unknown, unknown>>): T;
    };
    defineState: (match: RegExpMatchArray) => T["state"];
};
