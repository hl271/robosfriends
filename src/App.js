import React, { Component } from 'react';
import './App.css'
import {robots} from './data'
import CardList from './components/CardList'
import SearchBox from './components/Searchbox'
class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  render() {
    let filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className="container">
        <h1 className="text-center my-2">ROBOSFRIEND</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <div className="robo-display">
          <h2>Robosfriend</h2>
          <CardList robots={filteredRobots}/>        
        </div>
      </div>
      
    );
  }
}

export default App;
