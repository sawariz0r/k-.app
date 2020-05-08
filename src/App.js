import React, { useContext, useEffect } from 'react';
import './App.css';
import BaseComponent from './components/BaseComponent';
import { Context } from './Context';
import { Router } from "@reach/router";
import ReactNoSleep from 'react-no-sleep';

// Pages:
import Main from './pages/Main';
import Butik from './pages/Butik';

function App() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    state.socket.emit("butiker", {}, (x) => {
      dispatch({
        type: "SET_BUTIKER",
        payload: x
      })
    })
  }, [])

  return (
    <ReactNoSleep>
      <Router>
        <Main path="/" default />
        <Butik path="/:butikid" />
      </Router>
    </ReactNoSleep>
  );
}

export default App;
