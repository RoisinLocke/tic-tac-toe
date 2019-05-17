import React, { Component } from 'react';
import Board from './Board';
import Move from './Move';
import '../styles/game.scss'

export default class Game extends Component {
  
  state = {
    history: [{
      squares: Array(9).fill(''),
    }],
    xPlaying: true,
    step: 0
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.step + 1);
    const current = history[history.length -1];
    const updatedSquares = current.squares.slice();
    if (this.whoWon(updatedSquares) || updatedSquares[i]) {
        return;
    }
    updatedSquares[i] = this.state.xPlaying ? 'X' : 'O';
    this.setState({
        history: history.concat([{
          squares: updatedSquares
        }]),
        step: history.length,
        xPlaying: !this.state.xPlaying,
    });
  }

  goTo(step) {
    this.setState({
      step: step,
      xPlaying: (step % 2) === 0
    })
  }

  whoWon(squares) {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winningLines.length; i++) {
      let [a, b, c] = winningLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.step];
    const winner = this.whoWon(current.squares);

    let status = '';
        if (winner) {
            status = winner + ' WON!'
        } else {
            status = `The next player is ${this.state.xPlaying ? 'X' : 'O'}`;
        }
    
    return (
      <div className="game">
        <h2 className="board__status">{status}</h2>
        <Board 
          squares = {current.squares}
          onClick = {(i) => this.handleClick(i)}  
        />
        <Move 
          history = {this.state.history}
          onClick = {(step) => this.goTo(step)}
        />
      </div>
    )
  }
}
