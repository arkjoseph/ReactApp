import {combineReducers} from 'redux';
import fyRates from './FyRateReducer';
import authors from './AuthorReducer';
import ajaxCallsInProgress from './AjaxStatusReducer';

const rootReducer = combineReducers({
    fyRates,
    authors,
    ajaxCallsInProgress
});

export default rootReducer;