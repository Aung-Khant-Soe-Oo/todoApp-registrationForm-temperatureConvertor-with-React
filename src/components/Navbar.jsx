import React, { useState } from "react";
import { useTheme } from "./context/ThemeProvider";

const Navbar = (props) => {
  const { toggleTheme } = useTheme();
  return (
    <div className="navbar">
      <h1>assignment_05</h1>
      <div className="nav-links">
        <button
          onClick={() => props.getComponent("todo")}
          className={`btn ${props.active === "todo" ? "active" : ""} `}
        >
          Todo
        </button>
        <button
          onClick={() => props.getComponent("register")}
          className={`btn ${props.active === "register" ? "active" : ""} `}
        >
          Register
        </button>
        <button
          onClick={() => props.getComponent("temperature")}
          className={`btn ${props.active === "temperature" ? "active" : ""} `}
        >
          Temperature
        </button>
      </div>
      {/* <button className="btn" onClick={toggleTheme}>
        {isDark ? "Light" : "Dark"}
      </button> */}
      <div className="dark-mode-toggle">
        <input
          type="checkbox"
          id="dark-mode-toggle-checkbox"
          onChange={toggleTheme}
        />
        <label htmlFor="dark-mode-toggle-checkbox"></label>
      </div>
    </div>
  );
};

export default Navbar;
