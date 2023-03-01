import { combineReducers } from "redux";
import { MyStateType, ActionsTypes } from "./types";
import { MY_ACTION } from "./actions";

const initialState: MyStateType = {
  myData: null,
};

export const myReducer = (
  state = initialState,
  action: ActionsTypes
): MyStateType => {
  switch (action.type) {
    case MY_ACTION:
      return { ...state, myData: action.payload };
    default:
      return state;
  }
};

// Aquí puedes agregar más reducers si lo necesitas

const rootReducer = combineReducers({
  myReducer,
  // Agrega aquí más reducers si lo necesitas
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
