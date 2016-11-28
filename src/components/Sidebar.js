import React, { Component } from 'react'
import { connect } from 'react-redux'
import { swapVideos } from '../actions/actions'

function mapStateToProps(state) {
  return state
}

class Sidebar extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const clickedVideo = event.target.id
    this.props.dispatch(swapVideos(clickedVideo))
  }

  render() {
    const otherVideos = this.props.videos.map((video, idx) => {
      if (idx === 0) {
         return
       } else {
         return (
           <li onClick={this.handleClick} id={idx} className="list-group-item">
             <img src={video.thumbnail} alt={video.title} id={idx}/>
             {video.title}
           </li>
         )
       }
    })

    return (
      <div className="Sidebar">
        <ul>
          {otherVideos}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Sidebar)
