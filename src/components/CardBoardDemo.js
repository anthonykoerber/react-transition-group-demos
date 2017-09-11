import React, { Component } from "react";
import { TransitionGroup } from "react-transition-group";
import { FadeAndSlideTransition } from "../shared/transitions/CustomTransitions";

class CardBoardDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        { id: 0, content: "hello" },
        { id: 1, content: "world" },
        { id: 2, content: "click" },
        { id: 3, content: "me" }
      ]
    };

    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.removeLastCard = this.removeLastCard.bind(this);
  }

  render() {
    const { cards } = this.state;

    return (
      <main className="container">
        <h1>Card Board Transition Demo</h1>
        <button onClick={this.addCard}>Add a card</button>{" "}
        <button onClick={this.removeLastCard}>Remove a card</button>
        <TransitionGroup component={Board}>
          {cards.map(card => {
            return (
              <FadeAndSlideTransition duration={150} key={card.id}>
                <li className="board__item" key={card.id}>
                  <Card
                    onRemove={() => {
                      this.removeCard(card.id);
                    }}
                  >
                    {card.content}
                  </Card>
                </li>
              </FadeAndSlideTransition>
            );
          })}
        </TransitionGroup>
      </main>
    );
  }

  addCard() {
    const { cards } = this.state;
    const id = cards.length + 1;
    const newCard = {
      id,
      content: `Card ${id}`
    };
    this.setState({
      cards: cards.concat([newCard])
    });
  }

  removeCard(id) {
    const { cards } = this.state;
    let newCards = cards.filter(card => card.id !== id);
    this.setState({
      cards: newCards
    });
  }

  removeLastCard() {
    const { cards } = this.state;
    this.setState({
      cards: cards.slice(0, -1)
    });
  }
}

function Card({ children, onRemove }) {
  return (
    <div className="card">
      <button onClick={onRemove}>X</button> {children}
    </div>
  );
}

function Board({ children }) {
  return <ul className="board">{children}</ul>;
}

export default CardBoardDemo;
