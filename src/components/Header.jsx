import React from "react";

const Header = function () {
  return (
    <div className="header">
      <div class="ui large secondary inverted pointing menu">
        <h1>La Collection</h1>
        <a class="item" href="#1">
          Home
        </a>
        <a class="item" href="#1">
          Work
        </a>
        <a class="item" href="#1">
          Company
        </a>
        <a class="item" href="#1">
          Careers
        </a>
        <div class="right item" style={{ gap: "2rem" }}>
          <a class="ui inverted button" href="#1">
            <i class="sign-in icon"></i>
            Log in
          </a>
          <a class="ui inverted button" href="#1">
            <i class="share square icon"></i>
            Sign Up
          </a>
          <a class="ui inverted button" href="#1">
            <i class="shopping cart icon"></i>
            Cart ( 0 ){" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
