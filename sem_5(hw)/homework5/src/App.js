import logo from "./logo.svg";
import "./App.css";
import React, { useReducer } from "react";
import { Provider } from "react-redux";
import ThemeSwitcher from "./components/ThemeSwitcher";
import store from "./components/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeSwitcher />
      </Provider>
    </div>
  );
}

export default App;
