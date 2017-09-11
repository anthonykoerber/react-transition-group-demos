import React, { Component } from "react";
import { TransitionGroup } from "react-transition-group";
import { FadeTransition } from "../shared/transitions/CustomTransitions";

const duration = 300;

class TodoListTransitionDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["hello", "world", "click", "me"]
    };
  }

  handleAdd = () => {
    const newItems = this.state.items.concat([prompt("Enter some text")]);
    this.setState({
      items: newItems
    });
  };

  handleRemove = i => {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({
      items: newItems
    });
  };

  render() {
    return (
      <div>
        <h1>Todo Transition Demo</h1>
        <button onClick={this.handleAdd}>Add Item</button>
        <TransitionGroup>
          {this.state.items.map((item, i) => (
            <FadeTransition in={true} duration={duration} key={`item${i}`}>
              <div>
                <button onClick={() => this.handleRemove(i)}>X</button> {item}
              </div>
            </FadeTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default TodoListTransitionDemo;
