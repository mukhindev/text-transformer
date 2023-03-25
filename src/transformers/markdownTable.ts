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

export class MarkdownTableNode extends BaseNode<MarkdownTableNodeState> {
  type = "markdown-table";

  constructor() {
    super();
  }

  render() {
    return `<div class="table">TODO: Format to table</div>`;
  }
}

export const markdownTableTransformer: Transformer<MarkdownTableNode> = {
  regexp:
    /(\|[^\n]+\|.+\r?\n)((?:\|:?-+:?)+\|.+\r?\n*)((?:\|[^\n]+\|.+\r?\n?)*)?\r?\n*/g,
  node: MarkdownTableNode,
  defineState: (match) => {
    const [_, header, dividers, body] = match;

    const headerValues = splitTableRows(header);
    const dividerValues = splitTableRows(dividers);
    const bodyValues = splitTableRows(body);

    const colDefs = headerValues.reduce<Record<number, ColDef>>(
      (acc, content, index) => {
        let align;

        if (dividerValues[index].startsWith(":")) {
          align = "left";
        } else if (dividerValues[index].endsWith(":")) {
          align = "right";
        } else {
          align = "center";
        }

        acc[index] = {
          content,
          align,
        };

        return acc;
      },
      {}
    );

    const rowData: CellData[] = [];

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

/* Utils */
const splitTableRows = (rowString: string) => {
  const matches = rowString.match(/[^|\n]+\|/g) ?? [];
  return matches.map((el) => el.replace("|", "").trim());
};
