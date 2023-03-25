import { describe, it, expect } from "vitest";
import { parsePlainTextToNodes } from "./index.js";

import {
  markdownTableTransformer,
  markdownCodeTransformer,
  markdownParagraphTransformer,
} from "./transformers/index.js";

const MD = `\
# Hello World!

This is a paragraph.
This is a continuation of the line. Then there are 2 spaces!\x20\x20
This is the same paragraph, but newline.

This is a next paragraph.

| A       | B       | C       |
|:--------|---------|--------:|
| red     | green   | blue    |
| brown   | black   | white   |

|D|F|G|
|:-|:-|:-|
|dino|good dog|fat cat|
|fish|bird|duck|
||snake||

\`\`\`javascript
const answer = 42;
console.log(answer);
\`\`\`

Last paragraph without newline at the end.`;

const HTML = `\
<div class="paragraph"># Hello World!</div><div class="paragraph">This is a paragraph.
This is a continuation of the line. Then there are 2 spaces!<br/>This is the same paragraph, but newline.</div><div class="paragraph">This is a next paragraph.</div><div class="table">TODO: Format to table</div><div class="table">TODO: Format to table</div><div><pre><code>TODO: Format to code [javascript]: const answer = 42;
console.log(answer);
</code></pre></div><div class="paragraph">Last paragraph without newline at the end.</div>`;

describe("Render", () => {
  it("Markdown", () => {
    const transformers = [
      markdownTableTransformer,
      markdownCodeTransformer,
      markdownParagraphTransformer,
    ];

    const nodes = parsePlainTextToNodes(MD, transformers);
    const html = nodes.map((node) => node.render()).join("");
    console.log(html);

    expect(html).toBe(HTML);
  });
});
