import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./TodoListCSSTransitionDemo.css";

class TodoListCSSTransitionDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { items: ["hello", "world", "click", "me"] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([prompt("Enter some text")]);
    this.setState({ items: newItems });
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <CSSTransition
        key={`item${i}`}
        classNames="example"
        timeout={{ enter: 1000, exit: 500 }}
      >
        <div key={item} onClick={() => this.handleRemove(i)}>
          {item}
        </div>
      </CSSTransition>
    ));

    return (
      <div>
        <h1>Todo CSSTransition Demo</h1>
        <button onClick={this.handleAdd}>Add Item</button>
        <TransitionGroup>{items}</TransitionGroup>
      </div>
    );
  }
}

export default TodoListCSSTransitionDemo;
