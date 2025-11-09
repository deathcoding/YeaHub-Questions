import { useGetQuestionsListQuery } from "@/entities/question/api/questionApi";
import { QuestionItem } from "@/entities/question/ui/QuestionItem";

export function QuestionsList() {
  const { data: questionsData } = useGetQuestionsListQuery();
  const questions = questionsData?.data;
  return (
    <div>
      <ul>
        {questions?.map((question) => (
          <QuestionItem key={question.id} {...question} />
        ))}
      </ul>
    </div>
  );
}
