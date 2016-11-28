import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBox  from './SearchBox'
import Player from './Player'
import Sidebar from './Sidebar'
import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ButtsTube</h1>
        <SearchBox />
        <Player />
        <Sidebar />
      </div>
    )
  }
}

export default connect()(App)
