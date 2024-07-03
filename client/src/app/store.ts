import { configureStore } from "@reduxjs/toolkit";
import codeEditorSlice from "./features/codeEditorSlice";
import { api } from "./features/apiSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    codeEditorSlice,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
