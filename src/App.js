import React, { useContext, useEffect } from 'react';
import './App.css';
import { Context } from './Context';
import { Router } from "@reach/router";

// Pages:
import Main from './pages/Main';
import Butik from './pages/Butik';

function App() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    const userid = localStorage.getItem("koapp_id");
    state.socket.emit("auth", { id: userid }, (res) => {
      console.log(res);
      if (!userid) {
        localStorage.setItem("koapp_id", res);
        console.log("saved " + res);
      }
    })
    state.socket.emit("butiker", {}, (x) => {
      dispatch({
        type: "SET_BUTIKER",
        payload: x
      })
    })
    //eslint-disable-next-line
  }, [])

  return (
      <Router>
        <Main path="/" default />
        <Butik path="/:butikid" />
      </Router>
  );
}

export default App;
