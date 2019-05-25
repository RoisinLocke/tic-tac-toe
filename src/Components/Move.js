import React, { Component } from 'react';
import MoveHistory from './MoveHistory';
import MoveCard from './MoveCard';
import '../styles/move.scss';

export default class Move extends Component {

  state = {
    show: false
  }

  showMoves = (e) => {
    this.setState({
      show: !this.state.show
    })
    console.log(this.state.show)
  }

  render() {

    return (
      <>
        <button className = "move__show" onClick={this.showMoves}>Show Move History</button>
        < MoveHistory 
          show = {this.state.show}
          history = {this.props.history}
          onClick = {this.props.onClick}
        />
      </>
    )
    
  }
}
