import axios from 'axios'
const API_KEY = 'AIzaSyDJBjY4UqxuyyIDEFcAsBCwfyJcoz5Eixw'
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'

export function fetchVideos(searchTerm){
  const videos = axios.get(
    ROOT_URL,
    { params: {
        q: searchTerm,
        part: 'snippet',
        key: API_KEY,
        type: 'video'
      }
    }
  )

  return {
    type: "FETCH_VIDEOS",
    payload: videos
  }
}
