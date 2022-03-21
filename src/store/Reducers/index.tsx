import React, { useReducer } from "react";
import { IState } from "../constants";
import { ArticlesContent, IArticlesContent } from "../../constants/data";

enum ActionTypes {
  ADD_COUNT = "ADD_COUNT",
  CHOOSEN_PIZZAS = "CHOOSEN_PIZZAS",
  ADD_CHOOSEN_COUNT = "ADD_CHOOSEN_COUNT",
  REDUCE_COUNT = "REDUCE_COUNT",
}

export default function reducer(state: IState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COUNT:
      return { ...state, totalCount: action.payload.count };

    case ActionTypes.CHOOSEN_PIZZAS:
      const findedIndex = state.choosenPizzas.findIndex((element): any => {
        return element.id === action.payload.data.id;
      });
      if (findedIndex === -1) {
        return {
          ...state,
          choosenPizzas: [...state.choosenPizzas, action.payload.data],
          totalCount: action.payload.data.totalCount,
        };
      }
      const count = state.choosenPizzas[findedIndex].count + 1;
      const { choosenPizzas } = state;

      choosenPizzas[findedIndex] = { ...choosenPizzas[findedIndex], count };

      return {
        ...state,
        totalCount: action.payload.data.totalCount,
        choosenPizzas,
      };

    case ActionTypes.ADD_CHOOSEN_COUNT:
      return {
        ...state,
        choosenPizzas: state.choosenPizzas.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: item.count + 1,
            };
          }
          return item;
        }),
      };

    case ActionTypes.REDUCE_COUNT:
      return {
        ...state,
        choosenPizzas: state.choosenPizzas
          .map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                count: item.count - 1,
              };
            }
            return item;
          })
          .filter((pizza) => pizza.count >= 1),
      };

    default:
      return state;
  }
}
