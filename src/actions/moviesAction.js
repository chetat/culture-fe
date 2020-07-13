import axios from 'axios';
import { BASE_URL, FETCH_MOVIES, FETCH_ERROR, FETCH_MOVIE } from './types';

export const fetchMovies = () => async dispatch => {
    await axios.get(`${BASE_URL}/movies`)
        .then(response => {
            dispatch({
                type: FETCH_MOVIES, payload: response.data.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_ERROR, payload: { error: err, status: err.status }
            })
        })
};

export const fetchMovie = (id) => async dispatch => {
    await axios.get(`${BASE_URL}/movies/${id}`)
        .then(response => {
            dispatch({
                type: FETCH_MOVIE, payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_ERROR, payload: { error: err, status: err.status }
            })
        })
};