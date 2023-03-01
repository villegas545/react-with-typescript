import { ActionsTypes } from "./types";

export const MY_ACTION = "MY_ACTION";

export const myAction = (payload: string): ActionsTypes => {
  return { type: MY_ACTION, payload };
};
