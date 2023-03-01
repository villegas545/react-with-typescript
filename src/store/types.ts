import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "./index";

export interface MyStateType {
  myData: any;
}

export type ActionsTypes = AnyAction;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  ActionsTypes
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, ActionsTypes>;
