import { baseApi } from "@/shared/api/baseApi";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type {
  GetQuestionByIdParamsRequest,
  GetQuestionByIdResponse,
  GetQuestionsList,
} from "../model/question.types";
import { mockQuestions, mockQuestionsList } from "./question.mock";

const useMocks = import.meta.env.VITE_USE_MOCKS === "true";

const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestionsList: builder.query<GetQuestionsList, void>(
      useMocks
        ? {
            queryFn: async () => ({
              data: mockQuestionsList,
            }),
          }
        : {
            query: () => "/questions/public-questions",
          },
    ),
    getQuestionById: builder.query<
      GetQuestionByIdResponse,
      GetQuestionByIdParamsRequest
    >(
      useMocks
        ? {
            queryFn: async ({ questionId }) => {
              const id = Number(questionId);
              const question = mockQuestions.find((q) => q.id === id);

              if (!question) {
                const error: FetchBaseQueryError = {
                  status: 404,
                  data: "Question not found in mocks",
                };
                return { error };
              }

              return { data: question };
            },
          }
        : {
            query: ({ questionId }) =>
              `/questions/public-questions/${questionId}`,
          },
    ),
  }),
});

export const { useGetQuestionsListQuery, useGetQuestionByIdQuery } =
  questionApi;
