import React, { Component } from 'react';

import '../styles/move.scss';

export default class MoveCard extends Component {
  render() {

    return (
        <li className="movecard__item"key = {this.props.move}>
          <button className="movecard__button" onClick={this.props.onClick}>{this.props.description}</button>
        </li>
      );
    }
  };
