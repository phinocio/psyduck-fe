import { all } from 'redux-saga/effects';

import userSagas from 'sagas/users';
import quotesSagas from 'sagas/quotes';
import acheivementsSagas from 'sagas/achievements';

export default function* rootSaga() {
  yield all([
      ...userSagas,
      ...quotesSagas,
      ...acheivementsSagas,
  ]);
}
