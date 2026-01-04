import { useGetQuestionsListQuery } from "@/entities/question/api/questionApi";
import { QuestionItem } from "@/entities/question/ui/QuestionItem";
import styles from "./QuestionsList.module.css";

export function QuestionsList() {
  const { data: questionsData } = useGetQuestionsListQuery();
  const questions = questionsData?.data;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Вопросы React, JavaScript</h1>
      <ul>
        {questions?.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </ul>
    </div>
  );
}
