import styles from "./QuestionHeader.module.css";

interface QuestionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function QuestionHeader({
  title,
  description,
  className,
}: QuestionHeaderProps) {
  return (
    <header className={className}>
      <h1 className={styles.title}>{title}</h1>
      {description && <span className={styles.description}>{description}</span>}
    </header>
  );
}
