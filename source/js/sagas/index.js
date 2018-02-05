import { all } from 'redux-saga/effects';

import userSagas from './users';
import quotesSagas from './quotes';
import acheivementsSagas from './achievements';

export default function* rootSaga() {
  yield all([
      ...userSagas,
      ...quotesSagas,
      ...acheivementsSagas,
  ]);
}
