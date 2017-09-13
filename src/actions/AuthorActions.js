import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './AjaxStatusActions';

// Action Creator
export function loadAuthorsSuccess(authors) {
    //debugger;
    return {
        type: types.LOAD_AUTHORS_SUCCESS,
        authors
    };
}

export function loadAuthors() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}