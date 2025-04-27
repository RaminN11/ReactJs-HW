import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./store"; 

function ThemeSwitcher() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  const themeStyles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div style={themeStyles}>
      <h1>{theme === "light" ? "Светлая тема" : "Темная тема"}</h1>
      <button onClick={handleToggle}>
        Переключить на {theme === "light" ? "темную" : "светлую"} тему
      </button>
    </div>
  );
}

export default ThemeSwitcher;
