import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Header = function (props) {
  console.log(props);
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
          <NavLink className="ui inverted button hover" to="/login">
            <i className="sign-in icon"></i>
            Log in
          </NavLink>
          <NavLink className="ui inverted button hover" to="/signUp">
            <i className="share square icon"></i>
            Sign Up
          </NavLink>
          <NavLink className="ui inverted button hover" to="/cart">
            <i className="shopping cart icon"></i>
            Cart ({props.addCartReducer.length})
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const getMyState = function (state) {
  return state;
};

export default connect(getMyState, {})(Header);

// export default Header;
