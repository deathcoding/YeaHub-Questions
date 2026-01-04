import { baseApi } from "@/shared/api/baseApi";
import type {
  GetSpecializationsListParamsRequest,
  GetSpecializationsListResponse,
} from "../model/specialization.types";
import { mockSpecializationsList } from "./specialization.mock";

const useMocks = import.meta.env.VITE_USE_MOCKS === "true";
console.log(useMocks);

const specializationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSpecializations: build.query<
      GetSpecializationsListResponse,
      GetSpecializationsListParamsRequest
    >(
      useMocks
        ? {
            queryFn: async () => ({
              data: mockSpecializationsList,
            }),
          }
        : {
            query: (params) => ({
              url: "/specializations",
              params,
            }),
          },
    ),
  }),
});

export const { useGetSpecializationsQuery } = specializationApi;
