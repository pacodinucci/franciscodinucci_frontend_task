import { configureStore } from "@reduxjs/toolkit";
import leadsReducer from "@/redux/slices/leadsSlice";
import stepsReducer from "@/redux/slices/stepsSlice";

const store = configureStore({
  reducer: {
    leads: leadsReducer,
    steps: stepsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
