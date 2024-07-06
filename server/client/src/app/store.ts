import { configureStore } from "@reduxjs/toolkit";
import codeEditorSlice from "./features/codeEditorSlice";
import { api } from "./features/api";
import appSlice from "./features/appSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    codeEditorSlice,
    appSlice,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
