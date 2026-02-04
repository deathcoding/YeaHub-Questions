import { detectContentType } from "@/shared/lib";
import { HtmlContent } from "@/shared/ui/Html-content";
import { MarkdownContent } from "@/shared/ui/Markdown-content";
import { useMemo } from "react";

interface RichContentProps {
  content: string;
}

export function RichContent({ content }: RichContentProps) {
  const isMarkdown = useMemo(
    () => detectContentType(content) === "markdown",
    [content],
  );
  return isMarkdown ? (
    <MarkdownContent content={content} />
  ) : (
    <HtmlContent content={content} />
  );
}
