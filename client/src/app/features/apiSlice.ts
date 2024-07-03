import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CodeEditorSliceStateType } from "./codeEditorSlice";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URI,
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
  }),
});

export const { useSaveCodeMutation, useLoadCodeMutation } = api;
