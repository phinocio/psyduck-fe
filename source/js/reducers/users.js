import { Map } from 'immutable';

import {
  GET_USERS_START,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
  GET_USER_START,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
} from '../actions/users';

const initialState = Map({
  loading: false,
  error: null,
  users: null,
  user: null,
});

const actionsMap = {
  // Async action
  [GET_USERS_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
      users: null,
    }));
  },
  [GET_USERS_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [GET_USERS_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      users: action.data,
    }));
  },
  [GET_USER_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
      user: null,
    }));
  },
  [GET_USER_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [GET_USER_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      user: action.data,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
