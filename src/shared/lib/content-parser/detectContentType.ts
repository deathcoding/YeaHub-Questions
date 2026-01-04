export type ContentType = "html" | "markdown";

export function detectContentType(content: string): ContentType {
  const trimmed = content.trim();
  if (!trimmed) return "html";

  let mdScore = 0;
  let htmlScore = 0;

  if (/^#{1,6}\s/m.test(trimmed)) mdScore += 3;
  if (/^(\s*[*+-]|\d+\.)\s+/m.test(trimmed)) mdScore += 2;
  if (/```[\s\S]*?```/.test(trimmed)) mdScore += 3;
  if (/(^|\s)[*_]{1,2}\S[\s\S]*?[*_]{1,2}(\s|$)/.test(trimmed)) mdScore += 1;
  if (/^>\s+/m.test(trimmed)) mdScore += 2;

  const htmlTags = (trimmed.match(/<\/[a-z]+>|<[a-z]+[^>]*\/>/gi) || []).length;
  htmlScore += htmlTags * 2;

  if (/\s(class|style|id|src|href)=["']/.test(trimmed)) {
    htmlScore += 5;
  }

  if (htmlScore > 0 && mdScore > htmlScore) {
    return "markdown";
  }

  return htmlScore >= mdScore ? "html" : "markdown";
}
