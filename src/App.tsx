import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./PageContainer";
import PageHeader from "./components/Header";
import "antd/dist/antd.css";
import Landing from "./pages/Landing";
import { DispatchContext, initialState, StateContext } from "./store";
import reducer from "./store/Reducers";

function App() {
  const [state, dispatch]: any = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Landing />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
