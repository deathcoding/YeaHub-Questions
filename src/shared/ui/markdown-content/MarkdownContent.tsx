import MarkdownIt from "markdown-it";
import HighlightJS from "markdown-it-highlightjs";
import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js";
import DOMPurify from "dompurify";

hljs.registerAliases(["typescriptreact"], { languageName: "typescript" });
hljs.registerAliases(["ts", "tsx"], { languageName: "typescript" });
hljs.registerAliases(["js", "jsx", "javascriptreact"], {
  languageName: "javascript",
});

const md = new MarkdownIt({
  html: true,
  langPrefix: "language-",
}).use(HighlightJS, { hljs });

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const cleanContent = content
    .replace(/^<p>/i, "")
    .replace(/<\/p>$/i, "")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");

  try {
    const html = md.render(cleanContent);
    const safe = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
    return <div dangerouslySetInnerHTML={{ __html: safe }} />;
  } catch {
    return "";
  }
}
