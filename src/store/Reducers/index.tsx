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
      // console.log(action.payload.data, "payload dataaa");

      state.choosenPizzas.push(action.payload.data);
      // return state;
      return { ...state, totalCount: action.payload.data.totalCount };

    case "ADD_CHOOSEN_COUNT":
      const choosenPizzas = state.choosenPizzas.map((item) => {
        if (item.id === action.payload.id) {
          item.count += 1;
        }
        return item;
      });
      return { ...state, choosenPizzas };
    default:
      return state;
  }
}
