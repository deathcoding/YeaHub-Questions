import { useGetQuestionsListQuery } from "@/entities/question/api/questionApi";
import { QuestionItem } from "@/entities/question/ui/QuestionItem";
import styles from "./QuestionsList.module.css";
import { calculateTotalPages } from "@/shared/lib/utils/calculateTotalPages";
import { useState } from "react";
import { Pagination } from "@/shared/ui/pagination";
import { useSearchParams } from "react-router";

export function QuestionsList() {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = Number(searchParams.get("page")) || 1;

  const { data: questionsData } = useGetQuestionsListQuery({
    page: currentPage,
  });


  const questions = questionsData?.data || [];

  const totalPages = calculateTotalPages(
    questionsData?.total || 1,
    questionsData?.limit || 10,
  );

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
        onChange={}
      />
    </div>
  );
}
