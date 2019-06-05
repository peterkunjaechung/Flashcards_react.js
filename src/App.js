import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {code: 'React.js?', phrase: ' Great Question! ', description:'is a JavaScript library for building user interfaces.'}
        ],
      currentCard: {}
    }

    this.updateCard = this.updateCard.bind(this);
  }

  componentWillMount() {
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    });
  }

  getRandomCard(currentCards) {
    let card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  }

  updateCard() {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
      <div className='App'>
      <h1>Flashcards</h1>
        <div className='card-row'> 
          <Card question={this.state.currentCard.code}
                answer={this.state.currentCard.phrase}
                description={this.state.currentCard.description} 
          />
        </div>
        <div className='button-row'>
          <DrawButton drawCard={this.updateCard} />
        </div>
      </div>
    );
  }
}
