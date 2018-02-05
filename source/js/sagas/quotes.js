import { takeLatest, call, put } from 'redux-saga/effects';

import {
    GET_QUOTES_START,
    GET_QUOTES_ERROR,
    GET_QUOTES_SUCCESS
} from '../actions/quotes';
import api from '../api';

function createGetQuotes() {
    return function* (options) { // eslint-disable-line consistent-return
        try {
            const data = yield call(() => api.getQuotes(options.userId));
            const action = { type: GET_QUOTES_SUCCESS, data };

            yield put(action);
        } catch (error) {
            const action = { type: GET_QUOTES_ERROR, error };

            yield put(action);
        }
    };
}

export const getQuotes = createGetQuotes();

export function* getQuotesWatcher() {
    yield takeLatest(GET_QUOTES_START, getQuotes);
}

export default [
    getQuotesWatcher(),
];
