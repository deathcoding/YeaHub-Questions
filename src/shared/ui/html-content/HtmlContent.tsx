import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.min.css";
import { useEffect, useMemo, useRef } from "react";
import styles from "./HtmlContent.module.css";

interface HtmlContentProps {
  content: string;
}

export function HtmlContent({ content }: HtmlContentProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Очищаем контент (защита от XSS)
  const sanitizedContent = useMemo(
    () => DOMPurify.sanitize(content),
    [content],
  );

  useEffect(() => {
    if (contentRef.current) {
      const blocks = contentRef.current.querySelectorAll("pre code");
      blocks.forEach((block) => {
        const el = block as HTMLElement;

        if (!el.dataset.highlighted) {
          // ОБЯЗАТЕЛЬНО добавляем класс hljs для применения темы фона
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
