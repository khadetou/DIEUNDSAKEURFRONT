import { configureStore } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import AuthReducer from "./auth/authSlice";

const reducer = (state: any, action: any) => {
  const { type, payload } = action;
  if (type === HYDRATE) {
    const nextState = {
      ...state,
      ...payload,
    };
    return nextState;
  } else {
    return {
      auth: AuthReducer,
    };
  }
};

export const initStore: any = () =>
  configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV !== "production",
  });

export type AppDispatch = typeof initStore.dispatch;
export type RootState = ReturnType<typeof initStore.getState>;
export const wrapper = createWrapper(initStore, { debug: true });
