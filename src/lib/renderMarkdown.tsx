import { Link } from "react-router-dom";

// Lightweight, hand-rolled markdown renderer shared by blog articles and
// comparatif pages. Intentionally supports only the small subset the content
// uses: ## / ### headings, --- rules, GFM tables, > blockquotes (and **bold**
// first-line CTA boxes), - / 1. lists, *single-asterisk* note boxes, and the
// inline **bold** + [text](url) spans. Internal links become SPA <Link>;
// http(s) links become external <a target="_blank">.
//
// Extracted verbatim from BlogArticle.tsx so its rendered output stays
// byte-identical; Comparatif.tsx reuses the same pipeline.

export function renderInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-bold text-foreground">{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      const href = linkMatch[2];
      if (href.startsWith("http")) {
        return <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">{linkMatch[1]}</a>;
      }
      return <Link key={i} to={href} className="text-primary underline hover:text-primary/80">{linkMatch[1]}</Link>;
    }
    return <span key={i}>{part}</span>;
  });
}

export function renderMarkdownBlocks(content: string) {
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return <h2 key={i} className="text-2xl font-display font-bold text-foreground mt-10 mb-4">{block.replace("## ", "")}</h2>;
    }
    if (block.startsWith("### ")) {
      return <h3 key={i} className="text-xl font-display font-bold text-foreground mt-8 mb-3">{block.replace("### ", "")}</h3>;
    }
    if (block.startsWith("---")) {
      return <hr key={i} className="border-border my-10" />;
    }
    if (block.startsWith("|")) {
      const tableLines = block.split("\n").map((l) => l.trim()).filter(Boolean);
      if (tableLines.length >= 2 && /^\|[\s\-:|]+\|$/.test(tableLines[1])) {
        const parseCells = (line: string) =>
          line.replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
        const headers = parseCells(tableLines[0]);
        const bodyRows = tableLines.slice(2).map(parseCells);
        return (
          <div key={i} className="my-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  {headers.map((h, j) => (
                    <th key={j} className="text-left px-3 py-2 font-bold text-foreground">
                      {renderInlineMarkdown(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, k) => (
                  <tr key={k} className="border-b border-border/50">
                    {row.map((cell, j) => (
                      <td key={j} className="px-3 py-2 align-top">
                        {renderInlineMarkdown(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
    if (block.startsWith("> ")) {
      const lines = block.split("\n").map((l) => l.replace(/^>\s?/, ""));
      const isCta = lines[0].startsWith("**");
      if (isCta) {
        return (
          <div key={i} className="my-8 p-5 bg-secondary/60 border-l-4 border-primary rounded-r-2xl space-y-1">
            {lines.map((line, j) => (
              <p key={j} className={j === 0 ? "font-bold text-foreground" : "text-sm text-foreground/80 leading-relaxed"}>
                {renderInlineMarkdown(line)}
              </p>
            ))}
          </div>
        );
      }
      return (
        <blockquote key={i} className="my-6 pl-4 border-l-4 border-primary/30 italic text-foreground/85 space-y-2">
          {lines.map((line, j) => (
            <p key={j} className="text-base leading-relaxed">
              {renderInlineMarkdown(line)}
            </p>
          ))}
        </blockquote>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter(l => l.startsWith("- "));
      return (
        <ul key={i} className="space-y-2 pl-4">
          {items.map((item, j) => (
            <li key={j} className="text-base leading-relaxed list-disc list-outside">
              {renderInlineMarkdown(item.replace("- ", ""))}
            </li>
          ))}
        </ul>
      );
    }
    if (block.startsWith("1. ") || block.startsWith("2. ") || block.startsWith("3. ")) {
      const items = block.split("\n").filter(l => /^\d+\./.test(l));
      return (
        <ol key={i} className="space-y-2 pl-4">
          {items.map((item, j) => (
            <li key={j} className="text-base leading-relaxed list-decimal list-outside">
              {renderInlineMarkdown(item.replace(/^\d+\.\s*/, ""))}
            </li>
          ))}
        </ol>
      );
    }
    if (block.startsWith("*") && block.endsWith("*") && !block.startsWith("**")) {
      return (
        <p key={i} className="text-sm text-muted-foreground italic bg-secondary/50 p-4 rounded-xl">
          {renderInlineMarkdown(block.slice(1, -1))}
        </p>
      );
    }
    return <p key={i} className="text-base leading-relaxed">{renderInlineMarkdown(block)}</p>;
  });
}
