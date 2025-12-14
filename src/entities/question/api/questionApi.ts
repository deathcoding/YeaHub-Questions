import { baseApi } from "@/shared/api/baseApi";
import type {
  GetQuestionByIdParamsRequest,
  GetQuestionByIdResponse,
  GetQuestionsList,
} from "../model/question.types";

const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestionsList: builder.query<GetQuestionsList, void>({
      query: () => "/questions/public-questions",
    }),
    getQuestionById: builder.query<
      GetQuestionByIdResponse,
      GetQuestionByIdParamsRequest
    >({
      query: ({ questionId }) => `/questions/public-questions/${questionId}`,
    }),
  }),
});

export const { useGetQuestionsListQuery, useGetQuestionByIdQuery } =
  questionApi;
