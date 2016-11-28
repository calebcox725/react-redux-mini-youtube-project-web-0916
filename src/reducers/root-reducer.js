import { combineReducers } from 'redux'

function videos(state = [], action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      const videos = action.payload.data.items
      
      return videos.map(video => {
        return {
          src: `https://www.youtube.com/embed/${video.id.videoId}`,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.default.url
        }
      })
    case "SWAP_VIDEOS":
      const clickedVideo = action.payload
      const newList = [...state]

      const temp = newList[0]
      newList[0] = newList[clickedVideo]
      newList[clickedVideo] = temp

      return newList
    default:
      return state
  }
}

const rootReducer = combineReducers({videos})

export default rootReducer
