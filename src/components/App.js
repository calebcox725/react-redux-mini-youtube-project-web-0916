import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBox  from './SearchBox'
import Player from './Player'
import Sidebar from './Sidebar'
import '../styles/App.css'

function App() {
  return (
    <div className="App">
      <h1>BobbyHillTube</h1>
      <SearchBox />
      <Player />
      <Sidebar />
    </div>
  )
}

export default connect()(App)
