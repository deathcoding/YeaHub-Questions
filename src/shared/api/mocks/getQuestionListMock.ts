import type { GetQuestionsList } from "@/entities/question/model/question.types";
import mockDataQuestions from "./mockDataQuestions.json";

export async function getQuestionListMock(): Promise<GetQuestionsList> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockDataQuestions as GetQuestionsList), 1500);
  });
}
