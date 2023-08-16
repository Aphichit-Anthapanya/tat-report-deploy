// Need to use the React-specific entry point to import createApi
import { EnvConfig } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISearchDataObj } from "../Procurement/types";

// Define a service using a base URL and expected endpoints
export const procurementApi = createApi({
  reducerPath: "procurementApi",
  baseQuery: fetchBaseQuery({
    baseUrl: EnvConfig.apiUrl,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    search: builder.query<ISearchDataObj, void>({
      query: (searchObj) => ({
        url: `xxxx`,
        body: searchObj,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSearchQuery } = procurementApi;
