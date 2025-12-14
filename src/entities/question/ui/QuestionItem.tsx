import type { Question } from "../model/question.types";

interface QuestionItemProps {
  question: Question;
}

export function QuestionItem({ question }: QuestionItemProps) {
  return <li>{question.title}</li>;
}
