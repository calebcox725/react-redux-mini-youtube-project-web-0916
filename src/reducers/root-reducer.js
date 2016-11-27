import { combineReducers } from 'redux'

function reducer(state = [], action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      //fill this in
      break
    default:
      return state
  }
}


const rootReducer = combineReducers({reducer})

export default rootReducer
