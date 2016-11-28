import { combineReducers } from 'redux'

function videos(state = [], action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      const videos = action.payload.data.items
      return videos.map(video => {
        return {
          src: `https://www.youtube.com/embed/${video.id.videoId}`,
          channel: video.snippet.channelTitle,
          title: video.snippet.title,
          description: video.snippet.description,
          thumbnail: video.snippet.thumbnails.high.url
        }
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({videos})

export default rootReducer
