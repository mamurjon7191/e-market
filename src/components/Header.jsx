import React from "react";
import { NavLink } from "react-router-dom";

const Header = function () {
  return (
    <div className="header">
      <div className="ui large secondary inverted pointing menu">
        <h1>
          <NavLink to="/" className="item" style={{ fontSize: "1.5rem" }}>
            La Collection
          </NavLink>
        </h1>
        <NavLink className="item" to="/">
          Home
        </NavLink>
        <NavLink className="item" to="/products">
          Products
        </NavLink>
        <NavLink className="item" to="/about">
          About
        </NavLink>
        <NavLink className="item" to="/contact">
          Contact
        </NavLink>
        <div className="right item" style={{ gap: "2rem" }}>
          <NavLink className="ui inverted button" to="#1">
            <i className="sign-in icon"></i>
            Log in
          </NavLink>
          <NavLink className="ui inverted button" to="#1">
            <i className="share square icon"></i>
            Sign Up
          </NavLink>
          <NavLink className="ui inverted button" to="#1">
            <i className="shopping cart icon"></i>
            Cart ( 0 ){" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
