import { baseApi } from "@/shared/api/baseApi";
import type {
  GetQuestionByIdParamsRequest,
  GetQuestionByIdResponse,
  GetQuestionsList,
  GetQuestionsListParamsRequest,
} from "../model/question.types";
import { removeEmptyParams } from "@/shared/lib/utils/removeEmptyParams";

const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestionsList: builder.query<
      GetQuestionsList,
      GetQuestionsListParamsRequest
    >({
      query: (params) => {
        return {
          url: "/questions/public-questions",
          params: removeEmptyParams(params),
        };
      },
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
