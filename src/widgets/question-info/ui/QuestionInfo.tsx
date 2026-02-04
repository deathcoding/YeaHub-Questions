import type { Skill } from "@/entities/skill/model/skill.types";
import styles from "./QuestionInfo.module.css";
import { MetricBadge } from "@/shared/ui/Metric-badge";
import { Badge } from "@/shared/ui/Badge";

interface QuestionInfoProps {
  complexity: number;
  rate: number;
  skills: Skill[];
  keywords: string[];
}

export function QuestionInfo({
  complexity,
  rate,
  skills,
  keywords,
}: QuestionInfoProps) {
  return (
    <div className={styles.container}>
      <span>Уровень:</span>
      <span className={styles.metric}>
        <MetricBadge title="Сложность" value={complexity}></MetricBadge>
        <MetricBadge title="Рейтинг" value={rate}></MetricBadge>
      </span>
      <span>Навыки:</span>

      <span className={styles.skills}>
        {skills.map((skill) => {
          return <Badge key={skill.id}>{skill.title}</Badge>;
        })}
      </span>

      <span>Ключевые слова:</span>
      <span className={styles.keywords}>
        {keywords.map((keyword) => {
          return <span key={keyword}>{"#" + keyword}</span>;
        })}
      </span>
    </div>
  );
}
