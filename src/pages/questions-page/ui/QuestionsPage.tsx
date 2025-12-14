import { QuestionsFilter } from "@/widgets/questions-filter";
import { QuestionsList } from "@/widgets/questions-list";

export function QuestionsPage() {

  return (
    <>
      Вопросы
      {/* Виджет QuestionsList*/}
      <QuestionsList />
      Специализация
      {/* Виджет QuestionsFilter*/}
      <QuestionsFilter />
    </>
  );
}
