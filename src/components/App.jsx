import React from "react";
import Header from "./Header";
import Home from "./Home";
import Products from "./Products";
// import { Switch, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const App = function () {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
      </Routes>
    </div>
  );
};
export default App;
