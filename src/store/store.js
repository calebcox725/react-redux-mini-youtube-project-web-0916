import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import rootReducer from '../reducers/root-reducer'

const store = applyMiddleware(ReduxPromise)(createStore)(rootReducer)

export default store
