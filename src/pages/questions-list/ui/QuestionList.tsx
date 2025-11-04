import { useGetQuestionsListQuery } from "@/entities/question/api/questionApi";

export function QuestionList() {
  const { data: questionsData } = useGetQuestionsListQuery();
  const questions = questionsData?.data;

  return <ul>{questions?.map(q => <li key={q.id}>{q.title}</li>)}</ul>;
}
