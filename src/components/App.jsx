import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Products from "./Products";
import Product from "./Product";
import Cart from "./Cart";

import { Routes, Route } from "react-router-dom";

const App = function (props) {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
export default App;
