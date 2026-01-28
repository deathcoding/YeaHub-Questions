import { Skeleton } from "@/shared/ui/skeleton";
import styles from "./QuestionDetailSkeleton.module.css";

export function QuestionDetailSkeleton() {
  return (
    <article aria-hidden>
      <header className={styles.header}>
        <Skeleton height={32} width="85%" />
        <Skeleton height={20} width="40%" className={styles.headerSub} />
      </header>
      <section className={styles.section}>
        <Skeleton height={24} width={180} className={styles.sectionTitle} />
        <div className={styles.lines}>
          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="95%" />
          <Skeleton height={16} width="70%" />
        </div>
      </section>
      <section className={styles.section}>
        <Skeleton height={24} width={200} className={styles.sectionTitle} />
        <div className={styles.lines}>
          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="90%" />
          <Skeleton height={16} width="75%" />
        </div>
      </section>
    </article>
  );
}
