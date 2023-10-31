import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Todo from "./components/Todo/TodoForm";
import Register from "./components/Registration/Register";
import Temperature from "./components/Temperature";
import { useTheme } from "./components/context/ThemeProvider";

const App = () => {
  const [component, setComponent] = useState("todo");
  const active = component;
  const { isDark } = useTheme();

  const themeClass = isDark ? "dark-theme" : "";
  return (
    <div className={themeClass}>
      <Navbar
        getComponent={(component) => setComponent(component)}
        active={active}
      />
      <div className="main">
        {component === "todo" && <Todo />}
        {component === "register" && <Register />}
        {component === "temperature" && <Temperature />}
      </div>
    </div>
  );
};

export default App;
