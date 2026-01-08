import { Accordion } from "@/shared/ui/accordion";
import type { Question } from "../model/question.types";
import styles from "./QuestionItem.module.css";
import { MetricBadge } from "@/shared/ui/metric-badge";
import { MarkdownContent } from "@/shared/ui/markdown-content/MarkdownContent";
import { detectContentType } from "@/shared/lib/utils/detectContentType";
import { HtmlContent } from "@/shared/ui/html-content/HtmlContent";

interface QuestionItemProps {
  question: Question;
}

export function QuestionItem({ question }: QuestionItemProps) {
  const content = question.shortAnswer || "Нет короткого описания";
  const contentType = detectContentType(content);

  return (
    <li className={styles.questionItem}>
      <Accordion title={question.title}>
        <div className={styles.content}>
          <div className={styles.questionMetric}>
            <MetricBadge title="Рейтинг:" value={question.rate} />
            <MetricBadge title="Сложность:" value={question.complexity} />
          </div>
          {/* <HtmlContent content={content} /> */}

          {contentType === "markdown" ? (
            <MarkdownContent content={content} />
          ) : (
            <HtmlContent content={content} />
          )}
        </div>
      </Accordion>
    </li>
  );
}
