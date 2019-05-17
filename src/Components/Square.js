import React from 'react';
import '../styles/square.scss';

export default function Square(props) {
    return (
      <button className="square" onClick={props.onClick} disabled={props.disabled}>
        {props.value}
      </button>
    )
  }

