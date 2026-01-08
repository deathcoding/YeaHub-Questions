type getCleanContentParams = {
  content: string;
  format: "html" | "md";
};

export function getCleanContent({ content, format }: getCleanContentParams) {
  if (format === "html") {
    return content.replace(/&nbsp;/g, " ").replace(/\u00A0/g, " ");
  } else if (format === "md") {
    return content
      .replace(/^<p>/i, "")
      .replace(/<\/p>$/i, "")
      .replace(/&gt;/g, ">")
      .replace(/&lt;/g, "<");
  }
  return content;
}
