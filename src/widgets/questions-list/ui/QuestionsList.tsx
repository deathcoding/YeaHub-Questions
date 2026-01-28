import { useGetQuestionsListQuery } from "@/entities/question/api/questionApi";
import { QuestionItem } from "@/entities/question/ui/QuestionItem";
import styles from "./QuestionsList.module.css";
import { useSearchParams } from "react-router";
import { calculateTotalPages } from "@/shared/lib";
import { Pagination } from "@/shared/ui/pagination";
import { QueryState } from "@/shared/ui/query-state";
import { QuestionsListSkeleton } from "./QuestionsListSkeleton";

export function QuestionsList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const specializationParams = searchParams.getAll("specialization");
  const specializationIds = specializationParams.map(Number);

  const skillsParams = searchParams.getAll("skills");
  const skillsIds = skillsParams.map(Number);

  const rateParams = searchParams.getAll("rate");
  const rateIds = rateParams.map(Number);

  const complexityParams = searchParams.getAll("complexity");
  const complexityIds = complexityParams.map(Number);

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
    questionsData?.total ?? 1,
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

        {questions.length === 0 &&
          "По вашему запросу ничего не найдено. Попробуйте изменить фильтры или поиск"}

        <ul>
          {questions.map((question) => (
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
