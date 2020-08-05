import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { songListReducer, selectedSongReducer } from "./reducers/songReducers";
import { counterReducer } from "./reducers/counterReducers";

const rootReducer = combineReducers({
  songs: songListReducer,
  selectedSong: selectedSongReducer,
  counter: counterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
