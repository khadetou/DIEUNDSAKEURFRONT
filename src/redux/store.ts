import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import AuthReducer from "./auth/authSlice";

export const makeStore: any = () =>
  configureStore({
    reducer: {
      auth: AuthReducer,
      devTools: process.env.NODE_ENV !== "production",
    },
  });

//   export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore['getState']>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export type AppDispatch = typeof makeStore.dispatch;
export type RootState = ReturnType<typeof makeStore.getState>;
export const wrapper = createWrapper(makeStore, { debug: true });
