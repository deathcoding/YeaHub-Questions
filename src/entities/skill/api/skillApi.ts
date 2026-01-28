import { baseApi } from "@/shared/api/baseApi";
import type {
  GetSkillsListParamsRequest,
  GetSkillsListResponse,
} from "../model/skill.types";

const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSkillsList: build.query<
      GetSkillsListResponse,
      GetSkillsListParamsRequest
    >({
      query: ({ specializations }) => ({
        url: "/skills",
        params: {
          ...(specializations ? { specializations } : {}),
        },
      }),
    }),
  }),
});

export const { useGetSkillsListQuery } = skillApi;
