import { useGetQuestionsListQuery } from "@/entities/question/api/questionApi";
import { QuestionItem } from "@/entities/question/ui/QuestionItem/QuestionItem";
import styles from "./QuestionsList.module.css";
import { useSearchParams } from "react-router";
import { calculateTotalPages } from "@/shared/lib";
import { Pagination } from "@/shared/ui/Pagination";
import { QueryState } from "@/shared/ui/Query-state";
import { QuestionsListSkeleton } from "./QuestionsListSkeleton";
import { useParamsIds } from "@/shared/lib/hooks/useParamsIds";
import type { Question } from "@/entities/question/model/question.types";

export function QuestionsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { specializationIds, skillsIds, rateIds, complexityIds } =
    useParamsIds();

  const searchKeywords = searchParams.get("keywords");

  const {
    data: questionsData,
    isLoading,
    isError,
  } = useGetQuestionsListQuery({
    page: currentPage,
    specialization: specializationIds,
    skills: skillsIds,
    rate: rateIds,
    complexity: complexityIds,
    keywords: searchKeywords,
  });

  const questions = questionsData?.data ?? [];

  const totalPages = calculateTotalPages(
    questionsData?.total ?? 0,
    questionsData?.limit ?? 10,
  );

  const handleChangePage = (page: number) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("page", String(page));
      return next;
    });
  };

  return (
    <QueryState
      isLoading={isLoading}
      isError={isError}
      errorMessage="Данные не загрузились. Проверьте доступ к API."
      loadingFallback={<QuestionsListSkeleton />}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>Вопросы React, JavaScript</h1>

        {!isLoading &&
          questions.length === 0 &&
          "По вашему запросу ничего не найдено. Попробуйте изменить фильтры или поиск"}

        <ul>
          {questions.map((question: Question) => (
            <QuestionItem key={question.id} question={question} />
          ))}
        </ul>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={handleChangePage}
        />
      </div>
    </QueryState>
  );
}
