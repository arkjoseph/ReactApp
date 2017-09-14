import * as types from '../actions/actionTypes';
import initialState from './InitialState';

// Reducer - Take the current state and action and return a new state.
// 'state' is immutable. Not able to modify original state.
export default function courseReducer(state = initialState.fyRates, action) {
    //debugger;
    //console.log(action.fyRates);
    switch (action.type) {
        case types.LOAD_FYRATES__SUCCESS:
            // Return a brand new state array and honer immutable state with spread operator ...state

            return action.fyRates;

        // Create Course
        case types.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({},action.fyRate)
            ];

        // Update Course
        case types.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(fyRate => fyRate.id !== action.fyRate.id),
                Object.assign({},action.fyRate)
            ];
        //state.push(action.fyRate);
        //return state;
        default:
            return state;
    }

}