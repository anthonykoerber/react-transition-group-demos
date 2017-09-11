import React, { Component } from "react";
import TodoListCSSTransitionDemo from "./components/TodoListCSSTransitionDemo";
import FadeInTransitionDemo from "./components/FadeInTransitionDemo";
import AddEndListenerDemo from "./components/AddEndListenerDemo";
import TodoListTransitionDemo from "./components/TodoListTransitionDemo";
import CardBoardDemo from "./components/CardBoardDemo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListCSSTransitionDemo />
        <hr />
        <FadeInTransitionDemo />
        <hr />
        <AddEndListenerDemo />
        <hr />
        <TodoListTransitionDemo />
        <hr />
        <CardBoardDemo />
      </div>
    );
  }
}

export default App;
