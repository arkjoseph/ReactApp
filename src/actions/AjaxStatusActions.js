import * as types from './actionTypes';

// Track status for begining ajax calls
export function beginAjaxCall() {
    return {
        type: types.BEGIN_AJAX_CALL
    };
}
export function ajaxCallError() {
    return {
        type: types.AJAX_CALL_ERROR
    };
}