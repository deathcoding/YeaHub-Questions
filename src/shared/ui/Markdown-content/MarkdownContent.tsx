import MarkdownIt from "markdown-it";
import DOMPurify from "dompurify";
import { useRef } from "react";
import "highlight.js/styles/atom-one-dark.css";
import { getCleanContent } from "@/shared/lib";
import { useDynamicHighlight } from "@/shared/lib/hooks/useDynamicHighlight";

const md = new MarkdownIt({
  html: true,
  langPrefix: "language-",
});

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  useDynamicHighlight(contentRef, content);

  const cleanContent = getCleanContent({ content, format: "md" });

  try {
    const html = md.render(cleanContent);
    const safe = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
    
    return <div ref={contentRef} dangerouslySetInnerHTML={{ __html: safe }} />;
  } catch {
    return <div>Ошибка парсинга md</div>;
  }
}