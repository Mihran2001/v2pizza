import React, { useReducer } from "react";
import { IState } from "../constants";
import { ArticlesContent, IArticlesContent } from "../../constants/data";

export default function reducer(state: IState, action: any) {
  switch (action.type) {
    case "ADD_COUNT":
      return { ...state };
    case "CHOOSE_SIZE":
      return { ...state };
    case "ADD_PIZZA_MODAL":
      const modalPizzaData = ArticlesContent.filter(
        (item) => item.id === action.payload.data.id
      );

      // {choosenPizzas: Array(0), modalPizzaData: Array(0)}
      return { ...state, modalPizzaData: modalPizzaData[0] };

    default:
      return state;
  }
}
