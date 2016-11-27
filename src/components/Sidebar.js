import React, { Component } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return state
}

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
      </div>
    )
  }
}

export default connect(mapStateToProps)(Sidebar)
