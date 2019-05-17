import React, { Component } from 'react';
import Square from './Square';
import '../styles/board.scss';

export default class Board extends Component {

    state = {
        disabled: false
    }

    renderSquare(i) {
        return <Square 
                    value={this.props.squares[i]}
                    onClick={()=> this.props.onClick(i)}
                    disabled={this.state.disabled[i]}
                />;
      }
    
      render() {
        
        return (
          <section>
            <div className="board__container">
                <div className="board__row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className="board__row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board__row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
            </div>
          </section>
        )
}}

/* TO DO
- Cant re-click a square once its been clicked 
- Responsive
- Moves component
- Moves styling
- Animation for winner - modal?
- Change to responding to 'x' vs 'o' on keyboard rather than click
*/
