import axios from 'axios';
import { BASE_URL, FETCH_USER, FETCH_ERROR} from './types';

export const fetchUser = (id) => async dispatch => {
    await axios.get(`${BASE_URL}/movies/users/${id}/appearance`)
        .then(response => {
            dispatch({
                type: FETCH_USER, payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_ERROR, payload: { error: err, status: err.status }
            })
        })
};