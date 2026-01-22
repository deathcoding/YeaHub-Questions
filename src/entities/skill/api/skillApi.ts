import { baseApi } from "@/shared/api/baseApi";
import type {
  GetSkillsListParamsRequest,
  GetSkillsListResponse,
} from "../model/skill.types";
import { mockSkillsList } from "./skill.mock";

const useMocks = import.meta.env.VITE_USE_MOCKS === "true";

const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSkillsList: build.query<
      GetSkillsListResponse,
      GetSkillsListParamsRequest
    >(
      useMocks
        ? {
            queryFn: async () => ({
              data: mockSkillsList,
            }),
          }
        : {
            query: ({ specializations }) => ({
              url: "/skills",
              params: {
                ...(specializations ? { specializations } : {}),
              },
            }),
          },
    ),
  }),
});

export const { useGetSkillsListQuery } = skillApi;
