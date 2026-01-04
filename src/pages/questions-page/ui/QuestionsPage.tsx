import { QuestionsFilter } from "@/widgets/questions-filter";
import { QuestionsList } from "@/widgets/questions-list";
import styles from "./QuestionsPage.module.css";

export function QuestionsPage() {
  return (
    <>
      <div className={styles.page}>
        <section className={styles.content}>
          <QuestionsList />
        </section>
        <aside>
          <QuestionsFilter />
        </aside>
      </div>
    </>
  );
}
