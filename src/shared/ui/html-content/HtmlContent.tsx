import DOMPurify from "dompurify";
import { useMemo, useRef } from "react";
import "highlight.js/styles/atom-one-dark.min.css"; 
import { useDynamicHighlight } from "@/shared/lib/hooks/useDynamicHighlight"; 
import styles from "./HtmlContent.module.css";
import { getCleanContent } from "@/shared/lib";

interface HtmlContentProps {
  content: string;
}

export function HtmlContent({ content }: HtmlContentProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  useDynamicHighlight(contentRef, content);

  const sanitizedContent = useMemo(() => {
    const cleanContent = getCleanContent({ content, format: "html" });
    return DOMPurify.sanitize(cleanContent);
  }, [content]);

  return (
    <div
      ref={contentRef}
      className={styles.htmlContent}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}