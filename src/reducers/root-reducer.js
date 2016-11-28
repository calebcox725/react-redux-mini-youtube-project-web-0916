import { combineReducers } from 'redux'

function mainVideo(state = {}, action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      const video = action.payload.data.items[0]
      return {
        src: `https://www.youtube.com/embed/${video.id.videoId}`,
        title: video.snippet.title,
        thumbnail: video.snippet.thumbnails.default.url
      }
    case "SWAP_VIDEOS":
      return action.payload.swapVideo
    default:
      return state
  }
}

function sidebarVideos(state=[], action) {
  switch (action.type) {
    case "FETCH_VIDEOS":
      const videos = action.payload.data.items.slice(1)
      return videos.map( video => {
        return {
          src: `https://www.youtube.com/embed/${video.id.videoId}`,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.default.url
        }
      })
    case "SWAP_VIDEOS":
      const swapvideo = [...state]
      const swapIndex = swapvideo.indexOf(action.payload.swapVideo)
      swapvideo[swapIndex] = action.payload.mainVideo
      return swapvideo;
    default:
      return state;
  }
}

const rootReducer = combineReducers({mainVideo, sidebarVideos})

export default rootReducer
