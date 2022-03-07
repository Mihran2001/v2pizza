import React from "react";

interface IChoosenPizzas {
  name: string;
  id: number;
  size: string;
  count: number;
  smallPrice: number;
  middlePrice: number;
  bigPrice: number;
  srcSet: string;
}

export interface IState {
  totalCount: number;
  choosenPizzas: IChoosenPizzas[];
}

export const initialState: any = {
  totalCount: 0,
  choosenPizzas: [],
};

export const StateContext = React.createContext(initialState);
export const DispatchContext = React.createContext(initialState);
