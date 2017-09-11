import React, { Component } from "react";
import { Transition } from "react-transition-group";

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-out`,
  opacity: 0
};

const transtionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

class FadeInTransitionDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false
    };
  }

  toggleAnimate = e => {
    let anim = !this.state.animate;
    this.setState({ animate: anim });
  };

  onExited = e => {
    console.log("onExited: ", e);
  };

  onEntered = e => {
    console.log("onEntered: ", e);
  };

  render() {
    return (
      <div>
        <h1>Fade In Transition Demo</h1>
        <button onClick={this.toggleAnimate}>Animate</button>
        <Transition
          in={this.state.animate}
          timeout={duration}
          onEntered={this.onEntered}
          onExited={this.onExited}
        >
          {state => (
            <div style={{ ...defaultStyle, ...transtionStyles[state] }}>
              I'm A Fade-In Transition
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

export default FadeInTransitionDemo;
