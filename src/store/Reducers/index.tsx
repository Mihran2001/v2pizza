import React, { useReducer } from "react";
import { IState } from "../constants";

export default function reducer(state: IState, action: any) {
  switch (action.type) {
    case "ADD_COUNT":
      return { ...state };
    case "CHOOSE_SIZE":
      return { ...state };
    case "ADD_PIZZA_DATA":
      return state.choosenPizzas.map((item) => {
        if (item.id === action.payload.data.id) {
          return action.payload.data;
        }
        return item;
      });
    default:
      return state;
  }
}
