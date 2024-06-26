import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CodeEditorSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };

  currentLanguage: "html" | "css" | "javascript";
}

const initialState: CodeEditorSliceStateType = {
  fullCode: {
    html: "html code",
    css: "css code",
    javascript: "js code",
  },
  currentLanguage: "html",
};

export const codeEditorSlice = createSlice({
  name: "codeEditorSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CodeEditorSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
  },
});

export default codeEditorSlice.reducer;

export const { updateCurrentLanguage, updateCodeValue } =
  codeEditorSlice.actions;
