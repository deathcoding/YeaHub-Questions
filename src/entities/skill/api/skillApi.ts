import { baseApi } from "@/shared/api/baseApi";
import type {
  GetSkillsListParamsRequest,
  GetSkillsListResponse,
} from "../model/skill.types";
import { mockSkillsList } from "./skill.mock";

// TODO: вынести во внешний конфиг / .env
const useMocks = true;

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
            query: (params) => ({
              url: "/skills",
              params,
            }),
          },
    ),
  }),
});

export const { useGetSkillsListQuery } = skillApi;
