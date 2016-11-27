import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBox  from './SearchBox'
import Player from './Player'
import Sidebar from './Sidebar'
import '../styles/App.css'

function mapStateToProps(state) {
  return state
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBox />
        <Player />
        <Sidebar />
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
