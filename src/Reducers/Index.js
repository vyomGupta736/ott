import { combineReducers } from 'redux';
import MovieReducer from './MovieReducer';
import selection from './selection';

export default combineReducers({
    MovieReducer : MovieReducer,
    selection : selection
});