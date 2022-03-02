import React from "react";

interface IChoosenPizzas {
  name: string;
  id: number;
  size: string;
  count: number;
  minPrice: number;
  mediumPrice: number;
  bigPrice: number;
}

export interface IState {
  // count: number;
  // size: string;
  choosenPizzas: IChoosenPizzas[];
}

export const initialState: any = {
  choosenPizzas: [],
};

export const StateContext = React.createContext(initialState);
export const DispatchContext = React.createContext(initialState);
