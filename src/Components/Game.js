import React, { Component } from 'react';
import '../styles/game.scss'

export default class Game extends Component {
  render() {
    return (
      <div className="game">
        <Board />
      </div>
    )
  }
}
