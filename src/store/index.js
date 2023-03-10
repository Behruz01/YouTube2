import { createStore } from "redux";

const reducer = (state, action) => {
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === "increment") {
    return {
        ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "update") {
    return {
        ...state,
      counter: Number(action.payload),
    };
  }
  if (action.type === "login") {
    return {
        ...state,
      isLogin: !state.isLogin,
    };
  }
  return state;
};
const initialState = {
  counter: 0,
  isLogin: false,
};

export const store = createStore(reducer, initialState);
