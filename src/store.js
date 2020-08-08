import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { songListReducer, selectedSongReducer } from "./reducers/songReducers";
import { counterReducer } from "./reducers/counterReducers";
import { postListReducer, userListReducer } from "./reducers/blogReducers";

const rootReducer = combineReducers({
  songs: songListReducer,
  selectedSong: selectedSongReducer,
  counter: counterReducer,
  postList: postListReducer,
  userList: userListReducer,
});

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
