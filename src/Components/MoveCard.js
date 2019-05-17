import React, { Component } from 'react';

import '../styles/move.scss';

export default class MoveCard extends Component {
  render() {

    return (
        <li key = {this.props.move}>
          <button onClick={this.props.onClick}>{this.props.description}</button>
        </li>
      );
    }
  };
