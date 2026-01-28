import { Accordion } from "@/shared/ui/accordion";
import type { Question } from "../model/question.types";
import styles from "./QuestionItem.module.css";
import { MetricBadge } from "@/shared/ui/metric-badge";
import { RichContent } from "@/shared/ui/rich-content";
import { Link } from "react-router";
import OutLine_Arrow from "@/shared/assets/icons/Outline_Arrow.svg";

const FALLBACK_CONTENT = "Нет короткого описания";

interface QuestionItemProps {
  question: Question;
}

export function QuestionItem({ question }: QuestionItemProps) {
  const content = question.shortAnswer || FALLBACK_CONTENT;

  return (
    <li className={styles.questionItem}>
      <Accordion title={question.title}>
        <div className={styles.accordionBody}>
          <section className={styles.panel} aria-label="Описание вопроса">
            <div
              className={styles.questionMetric}
              role="group"
              aria-label="Метрики"
            >
              <MetricBadge title="Рейтинг:" value={question.rate} />
              <MetricBadge title="Сложность:" value={question.complexity} />
            </div>
            <RichContent content={content} />
          </section>
          <Link to={`questions/${question.id}`} className={styles.link}>
            Подробнее
            <img
              src={OutLine_Arrow}
              alt=""
              className={styles.linkIcon}
              aria-hidden
            />
          </Link>
        </div>
      </Accordion>
    </li>
  );
}
