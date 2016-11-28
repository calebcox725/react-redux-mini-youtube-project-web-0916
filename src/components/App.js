import React from 'react'
import { connect } from 'react-redux'
import SearchBox  from './SearchBox'
import Player from './Player'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="seven columns">
          <h1>BobbyHillTube</h1>
        </div>
        <div className="five columns">
          <SearchBox />
        </div>
      </div>
      <div className="row">
        <div className="nine columns">
          <Player />
        </div>
        <div className="three columns">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default connect()(App)
