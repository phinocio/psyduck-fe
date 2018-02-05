import { Map } from 'immutable';

import {
  GET_QUOTES_START,
  GET_QUOTES_ERROR,
  GET_QUOTES_SUCCESS
} from '../actions/quotes';

const initialState = Map({
  loading: false,
  error: null,
  quotes: null
});

const actionsMap = {
  // Async action
  [GET_QUOTES_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
      quotes: null,
    }));
  },
  [GET_QUOTES_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [GET_QUOTES_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      quotes: action.data,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
