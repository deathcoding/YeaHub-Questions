import { useGetQuestionsListQuery } from "@/entities/question/api/questionApi";
import { QuestionItem } from "@/entities/question/ui/QuestionItem";
import styles from "./QuestionsList.module.css";
import { useSearchParams } from "react-router";
import { calculateTotalPages } from "@/shared/lib";
import { Pagination } from "@/shared/ui/pagination";

export function QuestionsList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const { data: questionsData } = useGetQuestionsListQuery({
    page: currentPage,
  });

  const questions = questionsData?.data || [];

  const totalPages = calculateTotalPages(
    questionsData?.total || 1,
    questionsData?.limit || 10,
  );

  const handleChangePage = (page: number) => {
    setSearchParams({ page: String(page) });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Вопросы React, JavaScript</h1>
      <ul>
        {questions?.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={handleChangePage}
      />
    </div>
  );
}
