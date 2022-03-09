import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import BasketPage from "./pages/Basket"

const MainRoutes = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/basket" element={<BasketPage />} /> 
    </Routes>
    // </BrowserRouter>
  );
};

export default MainRoutes;
