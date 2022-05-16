import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "./app.css";

//routers
import { BrowserRouter } from "react-router-dom";
// routers

//redux
import { createStore } from "redux"; // store yaratib olish

import { Provider } from "react-redux"; // reducerlar bilan appni boglash uchun malumotlarni olib kelishi uchun kerak

import allReducers from "./redux/reducers/index";
//redux

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createStore(allReducers)}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector("#root")
);
