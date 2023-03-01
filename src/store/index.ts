import { configureStore } from "@reduxjs/toolkit";
import { myReducer } from "./reducers";

const store = configureStore({
  reducer: {
    myReducer: myReducer,
    // Agrega aquí más reducers si lo necesitas
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

export type AppDispatch = typeof store.dispatch;
