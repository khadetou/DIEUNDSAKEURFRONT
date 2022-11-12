import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import AuthReducer from "./auth/authSlice";
import PropertyReducer from "./property/propertySlice";
import AgentReducer from "./agents/agentSlice";

export const makeStore: any = () =>
  configureStore({
    reducer: {
      auth: AuthReducer,
      property: PropertyReducer,
      agent: AgentReducer,
      devTools: process.env.NODE_ENV !== "production",
    },
  });

export type AppDispatch = typeof makeStore.dispatch;
export type RootState = ReturnType<typeof makeStore.getState>;
export const wrapper = createWrapper(makeStore, { debug: true });
