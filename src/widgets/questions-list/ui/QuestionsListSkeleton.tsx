import { Skeleton } from "@/shared/ui/skeleton";
import listStyles from "./QuestionsList.module.css";
import styles from "./QuestionsListSkeleton.module.css";

const CARD_COUNT = 6;

export function QuestionsListSkeleton() {
  return (
    <div className={listStyles.container}>
      <div className={listStyles.title} aria-hidden>
        <Skeleton height={32} width="70%" />
      </div>
      <ul>
        {Array.from({ length: CARD_COUNT }, (_, i) => (
          <li key={i} className={styles.card}>
            <div className={styles.header}>
              <Skeleton height={22} width="90%" />
            </div>
            <div className={styles.metrics}>
              <Skeleton height={20} width={60} borderRadius={4} />
              <Skeleton height={20} width={80} borderRadius={4} />
            </div>
            <div className={styles.lines}>
              <Skeleton height={16} width="100%" />
              <Skeleton height={16} width="85%" />
              <Skeleton height={16} width="60%" />
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.paginationRow} aria-hidden>
        <Skeleton height={28} width={28} borderRadius={2} />
        <Skeleton height={24} width={24} borderRadius={2} />
        <Skeleton height={24} width={24} borderRadius={2} />
        <Skeleton height={24} width={24} borderRadius={2} />
        <Skeleton height={28} width={28} borderRadius={2} />
      </div>
    </div>
  );
}
