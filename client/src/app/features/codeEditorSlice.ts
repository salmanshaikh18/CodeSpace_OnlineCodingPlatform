import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CodeEditorSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };

  currentLanguage: "html" | "css" | "javascript";
  isOwner: boolean;
}

const initialState: CodeEditorSliceStateType = {
  fullCode: {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Template</title>
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
  </header>
  <div class="container">
    <h2>About</h2>
    <p>This is a basic HTML, CSS, and JavaScript template.</p>
    <button onclick="showAlert()">Click Me</button>
  </div>
</body>
</html>`,
    css: `body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

header {
  background: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
}

.container {
  margin: 20px;
}

button {
  background: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background: #555;
}`,
    javascript: `// JavaScript code goes here
function showAlert() {
  alert('Button clicked!');
}
    `,
  },
  currentLanguage: "html",
  isOwner: false,
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
    updateIsOwner: (state, action: PayloadAction<boolean>) => {
      state.isOwner = action.payload;
    },
    updateFullCode: (
      state,
      action: PayloadAction<CodeEditorSliceStateType["fullCode"]>
    ) => {
      state.fullCode = action.payload;
    },
  },
});

export default codeEditorSlice.reducer;

export const {
  updateCurrentLanguage,
  updateCodeValue,
  updateFullCode,
  updateIsOwner,
} = codeEditorSlice.actions;
