import React, { Component } from 'react';
import MoveCard from './MoveCard';
import '../styles/move.scss';

export default class Move extends Component {
  render() {
    let {history} = this.props;

    const moves = history.map((step, move) => {
      const description = move ?
        'Go to move #' + move :
        'Go to game start';

        return (
          <MoveCard 
            onClick = {() => this.props.onClick(move)}
            description = {description}
            key = {move}
          />
        )
    });

    return (
      <>
        <h3 className="move__header">Move History</h3>
        <ul className="move__list">{moves}</ul>
      </>
    )
    
  }
}
