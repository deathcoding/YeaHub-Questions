import { baseApi } from "@/shared/api/baseApi";
import type { GetQuestionsList } from "../model/Question.types";
import { getQuestionListMock } from "@/shared/api/mocks/getQuestionListMock";

const USE_MOCKS = import.meta.env.VITE_USE_MOCKS

const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestionsList: builder.query<GetQuestionsList, void>({
      async queryFn(_arg, _api, _extraOptions, baseQuery) {
        if (USE_MOCKS) {
          return {data: await getQuestionListMock()};
        }
        const result = await baseQuery("/questions/public-questions")
        return {data: result.data as GetQuestionsList}
      },
    }), 
  }),
});

export const { useGetQuestionsListQuery } = questionApi;
