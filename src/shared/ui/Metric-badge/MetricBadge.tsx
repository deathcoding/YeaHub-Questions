import styles from "./MetricBadge.module.css";

interface MetricBadgeProps {
  title: string;
  value: number;
}

export function MetricBadge({ title, value }: MetricBadgeProps) {
  return (
    <div className={styles.metricBadge}>
      <span>{title}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}
