import React from "react";
import logo from "../logo.svg";

const Header = ({ title }) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <img src={logo} className="logo" alt="logo" />
    </header>
  );
};

export default Header;