import { configureStore } from "@reduxjs/toolkit";
import codeEditorSlice from "./features/codeEditorSlice";

export const store = configureStore({
  reducer: {
    codeEditorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
