/// <reference types="vite/client" />

import { CodeEditorSliceStateType } from "./app/features/codeEditorSlice";

//users types
interface userInfoType {
  username: string;
  picture: string;
  email: string;
  savedCodes: Array<string>;
}

interface loginCredentialsType {
  userId: string;
  password: string;
}

interface signupCredentialsType {
  username: string;
  email: string;
  password: string;
}

interface codeType {
  fullCode?: CodeEditorSliceStateType ["fullCode"];
  title: string;
  _id?: string;
}

interface logoutType {
  message: string;
}

