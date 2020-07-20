import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import { connectRouter } from 'connected-react-router'
import moviesReducer from './moviesReducers';
import userReducer from './userReducer';
import usersReducer from './usersReducer';




const combineReducer = (history) => combineReducers({
  router: connectRouter(history),
  single_movie: movieReducer,
  movies: moviesReducer,
  user: userReducer,
  users: usersReducer
});

export default combineReducer;