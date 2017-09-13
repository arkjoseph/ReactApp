import * as types from '../actions/actionTypes';
import initialState from './InitialState';

// Reducer - Take the current state and action and return a new state.
// 'state' is immutable. Not able to modify original state.
export default function courseReducer(state = initialState.rates, action) {
    //debugger;
   // var location = state.rate.months;
    console.log(action.rates);
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            // Return a brand new state array and honer immutable state with spread operator ...state

            return action.rates;

        // Create Course
        case types.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({},action.rate)
            ];

        // Update Course
        case types.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(rate => rate.id !== action.rate.id),
                Object.assign({},action.rate)
            ];
        //state.push(action.rate);
        //return state;
        default:
            return state;
    }

}