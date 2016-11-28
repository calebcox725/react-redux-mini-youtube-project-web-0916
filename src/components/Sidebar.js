import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { swapVideos } from '../actions/actions'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ swapVideos }, dispatch)
}

function Sidebar(props) {
  function handleClick(event) {
    props.swapVideos(props.mainVideo, props.sidebarVideos[event.target.id])
  }

  const otherVideos = props.sidebarVideos.map((video, i) => {
    return (
      <li id={i} onClick={handleClick.bind(this)} className="list-group-item">
        <img id={i} src={video.thumbnail} />
        {video.title}
      </li>
    )
  })

  return (
    <div className="Sidebar">
      <ul>
        {otherVideos}
      </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
