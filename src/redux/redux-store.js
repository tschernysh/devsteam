import { createStore, combineReducers } from 'redux'
import galleryReducer from './galleryReducer'

let reducers = combineReducers({
   listGallery: galleryReducer,
});

let store = createStore(reducers)

window.store = store

export default store