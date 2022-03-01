import React from "react";

export const initialState = {
  name: "dsa",
};

export const StateContext = React.createContext(initialState);
export const DispatchContext = React.createContext(initialState);
