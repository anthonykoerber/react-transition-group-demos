import React from "react";
import { Transition } from "react-transition-group";

const FadeAndSlideTransition = ({ children, duration, in: inProp }) => {
  const defaultStyle = {
    transition: `${duration}ms ease-in`,
    transitionProperty: "opacity, transform"
  };

  const transitionStyles = {
    entering: {
      opacity: 0,
      transform: "translateY(-10%)"
    },
    entered: {
      opacity: 1,
      transform: "translateY(0)"
    },
    exiting: {
      opacity: 0,
      transform: "translateY(-10%)"
    }
  };

  return (
    <Transition in={inProp} timeout={{ enter: 0, exit: duration }}>
      {status => {
        if (status === "exited") {
          return null;
        }

        const currentStyles = transitionStyles[status];
        return React.cloneElement(children, {
          style: Object.assign({}, defaultStyle, currentStyles)
        });
      }}
    </Transition>
  );
};

const FadeTransition = ({ children, duration, in: inProp }) => {
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-out`,
    opacity: 0
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  };

  return (
    <Transition in={inProp} timeout={{ enter: 0, exit: duration }}>
      {status => {
        const currentStyles = transitionStyles[status];
        return React.cloneElement(children, {
          style: Object.assign({}, defaultStyle, currentStyles)
        });
      }}
    </Transition>
  );
};

export { FadeTransition, FadeAndSlideTransition };
