import React, { Component } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return state
}

class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
      </div>
    )
  }
}

export default connect(mapStateToProps)(SearchBox)
