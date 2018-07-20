import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setSearchField, requestRobots} from '../actions'
import './App.css'
import CardList from '../components/CardList'
import SearchBox from '../components/Searchbox'
import Scroll from '../components/Scroll'

const matchStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  isPending: state.requestRobots.isPending,
  robots: state.requestRobots.robots,
  error: state.requestRobots.error
})

const matchDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  //setSearchField return an object --> thunkMiddleware will ignore it
  onRequestRobots: () => dispatch(requestRobots()) 
  //requestRobots() return another function --> thunkMiddleware notice that and run the function
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    this.props.onRequestRobots()
  }
  
  render() {
    const {searchField, onSearchChange, robots} = this.props
    let filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return robots.length === 0 ? <h1 className="title">Loading...</h1> : (
      <div className="container">
        <h1 className="title text-center my-2">ROBOSFRIEND</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>      
    )
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(App);
