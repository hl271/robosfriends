import React, { Component } from 'react';
import './App.css'
import CardList from '../components/CardList'
import SearchBox from '../components/Searchbox'
import Scroll from '../components/Scroll'
class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({robots: users}))
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
        <h1 className="title text-center my-2">ROBOSFRIEND</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
      
    );
  }
}

export default App;
