import React, { useReducer } from "react";
import { IState } from "../constants";

export default function reducer(state: IState, action: any) {
  switch (action.type) {
    case "ADD_COUNT":
      return { ...state, count: state.count + 1 };
    case "CHOOSE_SIZE":
      return { ...state, size: action.payload.size };
    default:
      return state;
  }
}
