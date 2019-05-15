import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="home__header">Tic-Tac-Toe!</h1>
        <Link to="/play"><button className="home__cta">Let's Play!</button></Link>
      </div>
    )
  }
}