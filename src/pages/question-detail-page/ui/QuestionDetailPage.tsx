import { useGetQuestionByIdQuery } from "@/entities/question/api/questionApi";
import { QueryState } from "@/shared/ui/query-state";
import { RichContent } from "@/shared/ui/rich-content";
import { useParams } from "react-router";
import { QuestionDetailSkeleton } from "./QuestionDetailSkeleton";

const FALLBACK = {
  short: "Нет короткого описания",
  long: "Нет длинного описания",
} as const;

export function QuestionDetailPage() {
  const { id } = useParams<"id">();
  const {
    data: question,
    isLoading,
    isError,
  } = useGetQuestionByIdQuery({ questionId: id! }, { skip: !id });

  if (!id) return <p>Вопрос не найден</p>;

  const hasError = isError || (!isLoading && !question);

  return (
    <QueryState
      isLoading={isLoading}
      isError={hasError}
      errorMessage="Запрос завершился с ошибкой. Проверьте доступ к API."
      loadingFallback={<QuestionDetailSkeleton />}
    >
      {question && (
        <article>
          <header>
            <h1>{question.title}</h1>
            {question.description && <span>{question.description}</span>}
          </header>
          <section>
            <h2>Краткий ответ</h2>
            <RichContent content={question.shortAnswer || FALLBACK.short} />
          </section>
          <section>
            <h2>Развёрнутый ответ</h2>
            <RichContent content={question.longAnswer || FALLBACK.long} />
          </section>
        </article>
      )}
    </QueryState>
  );
}
