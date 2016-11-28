import React, { Component } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return state
}

class Player extends Component {
  render() {
    return (
      <div className="Player">
        <iframe width="800" height="600" src={this.props.videos[0].src} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(Player)
