export type ContentType = "html" | "markdown";

const MARKDOWN_PATTERNS = [
  { regex: /^#{1,6}\s/m, score: 3 },
  { regex: /^(\s*[*+-]|\d+\.)\s+/m, score: 2 },
  { regex: /```[\s\S]*?```/, score: 3 },
  { regex: /(^|\s)[*_]{1,2}\S[\s\S]*?[*_]{1,2}(\s|$)/, score: 1 },
  { regex: /^>\s+/m, score: 2 },
] as const;

const HTML_PATTERNS = [
  { regex: /<\/[a-z]+>|<[a-z]+[^>]*\/>/gi, score: 2 }, // per tag
  { regex: /\s(class|style|id|src|href)=["']/, score: 5 },
] as const;

export function detectContentType(content: string): ContentType {
  const trimmed = content.trim();
  if (!trimmed) return "html";

  let mdScore = 0;
  for (const { regex, score } of MARKDOWN_PATTERNS) {
    if (regex.test(trimmed)) mdScore += score;
  }

  let htmlScore = 0;
  const htmlTags = (trimmed.match(HTML_PATTERNS[0].regex) || []).length;
  htmlScore += htmlTags * HTML_PATTERNS[0].score;

  if (HTML_PATTERNS[1].regex.test(trimmed)) {
    htmlScore += HTML_PATTERNS[1].score;
  }

  if (htmlScore > 0 && mdScore > htmlScore) {
    return "markdown";
  }

  return htmlScore >= mdScore ? "html" : "markdown";
}
