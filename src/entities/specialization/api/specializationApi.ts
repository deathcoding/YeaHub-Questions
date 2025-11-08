import { baseApi } from "@/shared/api/baseApi";
import type {
  GetSpecializationsListParamsRequest,
  GetSpecializationsListResponse,
} from "../model/specialization.types";

const specializationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSpecializations: build.query<
      GetSpecializationsListResponse,
      GetSpecializationsListParamsRequest
    >({
      query: (params) => ({
        url: "/specializations",
        params,
      }),
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationApi;
