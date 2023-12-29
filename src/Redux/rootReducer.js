// rootReducer.js
import { combineReducers } from 'redux';
import Reducer from './slice.js'

const rootReducer = combineReducers({
  bookmarks: Reducer,
});

export default rootReducer;
