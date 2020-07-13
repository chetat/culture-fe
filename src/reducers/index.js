import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import { connectRouter } from 'connected-react-router'
import moviesReducer from './moviesReducers';



const combineReducer = (history) => combineReducers({
  router: connectRouter(history),
  single_movie: movieReducer,
  movies: moviesReducer
});

export default combineReducer;