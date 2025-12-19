import { QuestionsFilter } from "@/widgets/questions-filter";
import { QuestionsList } from "@/widgets/questions-list";
import styles from "./QuestionsPage.module.css";

export function QuestionsPage() {
  return (
    <>
      <h1>Вопросы React, JavaScript</h1>
      {/* Виджет QuestionsList*/}
      <div className={styles.page}>
        <section className={styles.content}>
          <QuestionsList />
        </section>
        {/* Виджет QuestionsFilter*/}
        <aside>
          <QuestionsFilter />
        </aside>
      </div>
    </>
  );
}
