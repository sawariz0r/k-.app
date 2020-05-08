import React, { createContext, useReducer } from 'react';
import io from "socket.io-client";

export const Context = createContext();
export const theme = {
  color: {
    blue: "#3C91E6",
    green: "#9FD356",
    black: "#342E37",
    white: "#FAFFFD",
    orange: "#FA824C"
  }
};
const initialState = {
  socket: io("https://checkered-cooked-fur.glitch.me"),
  notifications: [],
  butiker: [],
  ready: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_BUTIKER":
      return {
        ...state,
        butiker: action.payload,
        ready: true
      }
    default:
      return state;
  }
}

export const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  )
}