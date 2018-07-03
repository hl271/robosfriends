import React, { Component } from 'react';
import './App.css'
import CardList from './components/CardList'
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="robo-display">
          <h2>Robosfriend</h2>
          <CardList />        
        </div>
      </div>
      
    );
  }
}

export default App;
