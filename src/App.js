import React, { Fragment } from "react";
import "./App.css";

//components

import EnterToDo from "./components/EnterToDo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="container">
        <EnterToDo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
