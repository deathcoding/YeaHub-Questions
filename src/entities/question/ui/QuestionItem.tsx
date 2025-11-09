import type { Question } from "../model/question.types";

export function QuestionItem(question: Question) {
  const { title } = question

  return <li>{title}</li>;
}
