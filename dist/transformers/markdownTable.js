import { BaseNode } from "../BaseNode.js";
export class MarkdownTableNode extends BaseNode {
    constructor() {
        super();
        this.type = "markdown-table";
    }
    render() {
        return `<div class="table">TODO: Format to table</div>`;
    }
}
export const markdownTableTransformer = {
    regexp: /(\|[^\n]+\|.+\r?\n)((?:\|:?-+:?)+\|.+\r?\n*)((?:\|[^\n]+\|.+\r?\n?)*)?\r?\n*/g,
    node: MarkdownTableNode,
    defineState: (match) => {
        const [_, header, dividers, body] = match;
        const headerValues = splitTableRows(header);
        const dividerValues = splitTableRows(dividers);
        const bodyValues = splitTableRows(body);
        const colDefs = headerValues.reduce((acc, content, index) => {
            let align;
            if (dividerValues[index].startsWith(":")) {
                align = "left";
            }
            else if (dividerValues[index].endsWith(":")) {
                align = "right";
            }
            else {
                align = "center";
            }
            acc[index] = {
                content,
                align,
            };
            return acc;
        }, {});
        const rowData = [];
        for (let i = 0; i < bodyValues.length; i += 1) {
            const rowIndex = Math.floor(i / headerValues.length);
            const fieldIndex = i % headerValues.length;
            if (!rowData[rowIndex]) {
                rowData.push({});
            }
            rowData[rowIndex][fieldIndex] = bodyValues[i];
        }
        return {
            colDefs,
            rowData,
        };
    },
};
const splitTableRows = (rowString) => {
    var _a;
    const matches = (_a = rowString.match(/[^|\n]+\|/g)) !== null && _a !== void 0 ? _a : [];
    return matches.map((el) => el.replace("|", "").trim());
};
//# sourceMappingURL=markdownTable.js.map