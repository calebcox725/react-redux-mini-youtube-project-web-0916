import React, { Component } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return state
}

class Player extends Component {
  render() {
    return (
      <div className="Player">
      <iframe
        width="640"
        height="360"
        src={this.props.videos[0].src}></iframe>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Player)
