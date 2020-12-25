import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here

  const [timer, setTimer] = React.useState(0);

  const [f, setF] = React.useState(0);

  let id = 0;

  const handleKeyDown = (event) => {
    if (event.key === "0") {
      clearTimeout(id);
      setTimer(0);
      return;
    }
    if (event.keyCode !== 13) {
      clearTimeout(id);
      return;
    }
    if (isNaN(event.target.value)) {
      clearTimeout(id);
      setTimer(0);
      return;
    } else {
      setTimer(Math.floor(event.target.value));
    }
    setF(f + 1);
  };

  React.useEffect(() => {
    if (timer > 0) {
      id = setTimeout(() => {
        setTimer(timer - 1);
        setF(f + 1);
      }, 1000);
    } else {
      clearTimeout(id);
    }
  }, [f]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time">{timer}</div>
    </div>
  );
};

export default App;
