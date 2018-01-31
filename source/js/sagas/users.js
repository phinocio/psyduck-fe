import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_USERS_START,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
  GET_USER_START,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
} from 'actions/users';
import api from 'api';

// -------- Get people

function createGetUsers(isServer = false) {
  return function* (options) { // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.getUsers(options.id));
      const action = { type: GET_USERS_SUCCESS, data };

      if (isServer) {
        return action;
      }

      yield put(action);
    } catch (error) {
      const action = { type: GET_USERS_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}
function createGetUser() {
  return function* (options) { // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.getUser(options.userId));
      const action = { type: GET_USER_SUCCESS, data };

      yield put(action);
    } catch (error) {
      const action = { type: GET_USER_ERROR, error };

      yield put(action);
    }
  };
}

export const getUsers = createGetUsers();
export const getUser = createGetUser();
export const getUsersServer = createGetUsers(true);


export function* getUsersWatcher() {
  yield takeLatest(GET_USERS_START, getUsers);
}
export function* getUserWatcher() {
  yield takeLatest(GET_USER_START, getUser);
}

export default [
  getUsersWatcher(),
  getUserWatcher()
];
