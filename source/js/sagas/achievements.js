import { takeLatest, call, put } from 'redux-saga/effects';

import {
    GET_ACHIEVEMENTS_START,
    GET_ACHIEVEMENTS_ERROR,
    GET_ACHIEVEMENTS_SUCCESS
  } from '../actions/achievements';
import api from '../api';

function createGetAchievements() {
    return function* (options) { // eslint-disable-line consistent-return
        try {
            const data = yield call(() => api.getAchievements(options.userId));
            const action = { type: GET_ACHIEVEMENTS_SUCCESS, data };

            yield put(action);
        } catch (error) {
            const action = { type: GET_ACHIEVEMENTS_ERROR, error };

            yield put(action);
        }
    };
}

export const getAchievements = createGetAchievements();

export function* getAchievementsWatcher() {
    yield takeLatest(GET_ACHIEVEMENTS_START, getAchievements);
}

export default [
    getAchievementsWatcher(),
];
