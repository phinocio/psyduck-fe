import { all } from 'redux-saga/effects';

import userSagas from 'sagas/users';

export default function* rootSaga() {
  yield all([
      ...userSagas
  ]);
}
