import { baseApi } from "@/shared/api/baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkillsList: build.query<>
  })
})