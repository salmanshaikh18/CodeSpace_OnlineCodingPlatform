import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    html: "",
    css: "",
    javascript: "",
    currentLanguage: "html",
}

export const codeEditorSlice = createSlice({
    name: "codeEditorSlice",
    initialState,
    reducers: {},
})

export default codeEditorSlice.reducer
