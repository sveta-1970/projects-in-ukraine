import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="Header">
      <div className="header-top">
        <img className="logo" src="../../../images/logo.png" alt="logo" />
        <img
          className="menu"
          src="../../../images/menu-gamburger.png"
          alt="gamburger menu"
        />
      </div>
      <h1>
        Втілюємо в життя найкрупніші проекти в Україні
      </h1>
      <small>Стадіони, газопроводи, мости, дамби</small>
    </div>
  );
}

export default Header;
