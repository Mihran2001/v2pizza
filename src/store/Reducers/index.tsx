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
      // let isFind = false;
      // const findedItem = state.choosenPizzas.find((element, index, array):any => {
      //   // if(element.id === action.payload.data.id) {

      //   // }
      //   return element.id === action.payload.data.id
      // })

      // for (let i = 0; i < state.choosenPizzas.length; ++i) {
      //   if (state.choosenPizzas[i].id === action.payload.data.id) {
      //     isFind = true;
      //   }
      // }

      // if (isFind === true) {
      //   return { ...state, totalCount: action.payload.data.totalCount, choosenPizzas: [...state.choosenPizzas, ] };
      // }

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

    case "ADD_CHOOSEN_COUNT":
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

    case "REDUCE_COUNT":
      return {
        ...state,
        choosenPizzas: state.choosenPizzas.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: item.count - 1,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
}
