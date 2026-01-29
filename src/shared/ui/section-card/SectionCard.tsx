import styles from "./SectionCard.module.css";

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionCard({ title, children, className }: SectionCardProps) {
  return (
    <section className={className}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.description}>{children}</div>
    </section>
  );
}
