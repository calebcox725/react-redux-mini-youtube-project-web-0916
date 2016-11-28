import React from 'react'
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
    const mainVideo = props.mainVideo
    const swapVideo = props.sidebarVideos[event.target.id]

    props.swapVideos(mainVideo, swapVideo)
  }

  const otherVideos = props.sidebarVideos.map((video, i) => {
    return (
      <li id={i} onClick={handleClick.bind(this)} className="list-group-item">
        <img id={i} src={video.thumbnail} /><br/>
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
