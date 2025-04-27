import { configureStore, createAction } from "@reduxjs/toolkit";


export const toggleTheme = createAction('TOGGLE_THEME');


const initialState = {
  theme: "light",
};


function themeReducer(state = initialState, action) {
  switch (action.type) {
    case toggleTheme.type:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}

const store = configureStore({
  reducer: themeReducer,
});

export default store;