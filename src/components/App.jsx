import React from "react";
import Header from "./Header";
import Home from "./Home";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";

const App = function () {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};
export default App;
