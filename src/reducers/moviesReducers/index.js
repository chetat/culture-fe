import {FETCH_MOVIES, FETCH_SEARCHED_RESULTS, FETCH_ERROR} from '../../actions/types';

export const initialState = {
    isLoading: false,
    fetchError: null,
    movies: {},
    searched_data: {}

};

const moviesReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_MOVIES:
            return {
                ...state, movies: action.payload
            };
        case FETCH_SEARCHED_RESULTS:
            return Object.assign({}, state, {
                    searched_data: action.payload
                });
        case FETCH_ERROR:
            return {
                ...state, fetchError: action.error
            }
        default:
            return state;
    }
}

export default moviesReducer;