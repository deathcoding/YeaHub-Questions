import { useGetQuestionByIdQuery } from "@/entities/question/api/questionApi";
import { QueryState } from "@/shared/ui/Query-state";
import { RichContent } from "@/shared/ui/Rich-content";
import { useParams } from "react-router";
import { QuestionDetailSkeleton } from "./QuestionDetailSkeleton";
import { QuestionHeader } from "@/entities/question";
import { QuestionInfo } from "@/widgets/question-info/ui/QuestionInfo";
import styles from "./QuestionDetail.module.css";
import { SectionCard } from "@/shared/ui/Section-card";
import { BackButton } from "@/shared/ui/Back-button";

const FALLBACK = {
  short: "Нет короткого описания",
  long: "Нет длинного описания",
} as const;

function QuestionDetailPage() {
  const { id } = useParams<"id">();

  const {
    data: question,
    isLoading,
    isError,
  } = useGetQuestionByIdQuery({ questionId: id ?? "" }, { skip: !id });

  if (!id) return <p>Вопрос не найден</p>;

  const hasError = isError || (!isLoading && !question);

  return (
    <>
      <BackButton fallbackPath="/" className={styles.backButton}>
        Назад
      </BackButton>
      <QueryState
        isLoading={isLoading}
        isError={hasError}
        errorMessage="Запрос завершился с ошибкой. Проверьте доступ к API."
        loadingFallback={<QuestionDetailSkeleton />}
      >
        {question && (
          <div className={styles.container}>
            <article className={styles.article}>
              <QuestionHeader
                title={question.title}
                description={question.description}
                className={styles.header}
              ></QuestionHeader>

              <SectionCard title="Краткий ответ" className={styles.section}>
                <RichContent content={question.shortAnswer || FALLBACK.short} />
              </SectionCard>

              <SectionCard title="Развёрнутый ответ" className={styles.section}>
                <RichContent content={question.longAnswer || FALLBACK.long} />
              </SectionCard>
            </article>

            <QuestionInfo
              complexity={question.complexity}
              keywords={question.keywords}
              rate={question.rate}
              skills={question.questionSkills}
            ></QuestionInfo>
          </div>
        )}
      </QueryState>
    </>
  );
}

export const Component = QuestionDetailPage;
