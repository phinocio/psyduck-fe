import { Map } from 'immutable';

import {
  GET_ACHIEVEMENTS_START,
  GET_ACHIEVEMENTS_ERROR,
  GET_ACHIEVEMENTS_SUCCESS
} from 'actions/achievements';

const initialState = Map({
  loading: false,
  error: null,
  achievements: null
});

const actionsMap = {
  // Async action
  [GET_ACHIEVEMENTS_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
      achievements: null,
    }));
  },
  [GET_ACHIEVEMENTS_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [GET_ACHIEVEMENTS_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      achievements: action.data,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
