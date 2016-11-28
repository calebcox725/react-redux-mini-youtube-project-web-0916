import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return { mainVideo: state.mainVideo }
}

function Player(props) {
  return (
    <div className="Player video-container">
      <iframe src={ props.mainVideo.src } />
    </div>
  )
}

export default connect(mapStateToProps)(Player)
