import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Game from './Components/Game';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/play' component={Game} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
