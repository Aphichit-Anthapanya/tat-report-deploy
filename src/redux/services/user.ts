// Need to use the React-specific entry point to import createApi
import { EnvConfig } from "@/config";
import { IUserProfile, IUserLogin, ILoginRes } from "@/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: EnvConfig.apiUrl,
    credentials: "include",
  }),

  endpoints: (builder) => ({
    requestLogin: builder.mutation<ILoginRes, IUserLogin>({
      query: (loginData) => ({
        url: `auth/login`,
        method: "POST",
        body: loginData,
      }),
    }),
    requestLogout: builder.mutation<void, void>({
      query: () => ({
        url: `auth/logout`,
        method: "POST",
      }),
    }),
    fetchProfile: builder.query<IUserProfile, void>({
      query: (loginData) => ({
        url: `users/profile`,
        body: loginData,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useRequestLoginMutation,
  useRequestLogoutMutation,
  useFetchProfileQuery,
} = userApi;
