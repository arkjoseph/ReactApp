import * as types from './actionTypes';
import FyRatesApi from '../api/mockFyRatesApi';
import {beginAjaxCall, ajaxCallError} from './AjaxStatusActions';

// Action Creator
export function loadFyRatesSuccess(fyRates) {
    //debugger;
    return {
        type: types.LOAD_FYRATES__SUCCESS,
        fyRates
    };
}

export function createCourseSuccess(course){
    return {
        type: types.CREATE_COURSE_SUCCESS,
        course
    };
}

export function updateCourseSuccess(course){
    return {
        type: types.UPDATE_COURSE_SUCCESS,
        course
    };
}
export function loadFyRates() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return FyRatesApi.getAllFyRates().then(fyRates => {
            dispatch(loadFyRatesSuccess(fyRates));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course) {
    return function (dispatch, getState){
        dispatch(beginAjaxCall());
        return FyRatesApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
                dispatch(createCourseSuccess(savedCourse));
        }).catch(error =>{
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}