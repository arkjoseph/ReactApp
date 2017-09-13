import {combineReducers} from 'redux';
import rates from './CourseReducer';
import authors from './AuthorReducer';
import ajaxCallsInProgress from './AjaxStatusReducer';

const rootReducer = combineReducers({
    rates,
    authors,
    ajaxCallsInProgress
});

export default rootReducer;