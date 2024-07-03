import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CodeEditorSliceStateType } from "./codeEditorSlice";
import { loginCredentialsType, logoutType, userInfoType } from "@/vite-env";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URI,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    saveCode: builder.mutation<
      { url: string; status: string },
      CodeEditorSliceStateType["fullCode"]
    >({
      query: (fullCode) => ({
        url: "code-editor/save",
        method: "POST",
        body: fullCode,
      }),
    }),
    loadCode: builder.mutation<
      { fullCode: CodeEditorSliceStateType["fullCode"] },
      { urlId: string }
    >({
      query: (body) => ({
        url: "code-editor/load",
        method: "POST",
        body: body,
      }),
    }),
    login: builder.mutation<userInfoType, loginCredentialsType>({
      query: (body) => ({
        url: "user/login",
        method: "POST",
        body: body,
      }),
    }),
    logout: builder.mutation<logoutType, void>({
      query: () => ({
        url: "user/logout",
        method: "POST",
      }),
    }),
    getUserDetails: builder.query<userInfoType, void>({
      query: () => ({
        url: "/user/user-details",
        cache: "no-store"
      }),
    }),
  }),
});

export const {
  useSaveCodeMutation,
  useLoadCodeMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetUserDetailsQuery,
} = api;
