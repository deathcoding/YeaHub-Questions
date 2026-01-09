import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.min.css";
import { useEffect, useMemo, useRef } from "react";
import styles from "./HtmlContent.module.css";
import { getCleanContent } from "@/shared/lib";

interface HtmlContentProps {
  content: string;
}

export function HtmlContent({ content }: HtmlContentProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const sanitizedContent = useMemo(() => {
    const cleanContent = getCleanContent({ content, format: "html" });
    return DOMPurify.sanitize(cleanContent);
  }, [content]);

  useEffect(() => {
    if (contentRef.current) {
      const blocks = contentRef.current.querySelectorAll("pre code");
      blocks.forEach((block) => {
        const el = block as HTMLElement;

        if (!el.dataset.highlighted) {
          el.classList.add("hljs");
          hljs.highlightElement(el);
          el.dataset.highlighted = "true";
        }
      });
    }
  }, [sanitizedContent]);

  return (
    <div
      ref={contentRef}
      className={styles.htmlContent}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}
