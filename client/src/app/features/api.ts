import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CodeEditorSliceStateType } from "./codeEditorSlice";
import {
  codeType,
  loginCredentialsType,
  logoutType,
  registerCredentialsType,
  userInfoType,
} from "@/vite-env";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URI,
    credentials: "include",
  }),
  tagTypes: ["myRepositories", "allRepositories"],
  endpoints: (builder) => ({
    saveCode: builder.mutation<
      { url: string; status: string },
      { fullCode: CodeEditorSliceStateType["fullCode"]; title: string }
    >({
      query: (fullCode) => ({
        url: "code-editor/save",
        method: "POST",
        body: fullCode,
      }),
      invalidatesTags: ["myRepositories"],
    }),
    loadCode: builder.mutation<
      { fullCode: CodeEditorSliceStateType["fullCode"]; isOwner: boolean },
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
    register: builder.mutation<userInfoType, registerCredentialsType>({
      query: (body) => ({
        url: "/user/register",
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
        cache: "no-store",
      }),
    }),
    getMyCodes: builder.query<Array<codeType>, void>({
      query: () => "/user/my-repositories",
      providesTags: ["myRepositories"],
    }),
    deleteCode: builder.mutation<void, string>({
      query: (_id) => ({
        url: `/code-editor/delete/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["myRepositories", "allRepositories"],
    }),
    editCode: builder.mutation<
      void,
      { fullCode: CodeEditorSliceStateType["fullCode"]; id: string }
    >({
      query: ({ fullCode, id }) => {
        return {
          url: `/code-editor/edit/${id}`,
          method: "PUT",
          body: fullCode,
        };
      },
    }),
  }),
});

export const {
  useSaveCodeMutation,
  useLoadCodeMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetUserDetailsQuery,
  useRegisterMutation,
  useGetMyCodesQuery,
  useEditCodeMutation,
  useDeleteCodeMutation,
} = api;
