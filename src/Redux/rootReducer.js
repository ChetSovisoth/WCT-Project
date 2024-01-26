// rootReducer.js
import { combineReducers } from "redux";
import bookmarksReducer from "./slice.js";
import authReducer from "./authSlice.js";
const rootReducer = combineReducers({
  bookmarks: bookmarksReducer,
  auth: authReducer,
});

export default rootReducer;