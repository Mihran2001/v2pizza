import React, { useReducer } from "react";
import { IState } from "../constants";
import { ArticlesContent, IArticlesContent } from "../../constants/data";

export default function reducer(state: IState, action: any) {
  switch (action.type) {
    case "ADD_COUNT":
      return { ...state, totalCount: action.payload.count };
    // case "CHOOSEN_PIZZAS":
    //   state.choosenPizzas.push(action.payload.data);
    //   return state;
    case "CHOOSEN_PIZZAS":
      state.choosenPizzas.push(action.payload.data);
      return state;
    default:
      return state;
  }
}
