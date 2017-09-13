import * as types from '../actions/actionTypes';
import initialState from './InitialState';


// Reducer - Take the current state and action and return a new state.
// 'state' is immutable. Not able to modify original state.
export default function authorReducer(state = initialState.authors, action) {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:

            // Return a brand new state array and honer immutable state with spread operator ...state
            //debugger;
            return action.authors;

        //state.push(action.course);
        //return state;

        default:
            return state;
    }
}