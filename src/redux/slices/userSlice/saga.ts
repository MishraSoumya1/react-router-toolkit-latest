import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchUsers as fetchUsersapi } from './api';
import { userActions } from '.';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
  error?: any;
}

export function* fetchUsers() {
  const response: ResponseGenerator = yield call(fetchUsersapi);
  console.log(response);

  if (response.error || response?.status > 201) {
    yield put(
      userActions.fetchUsersFail({
        error: response?.error ?? 'Error fetching api',
        status: response.status,
      })
    );
  } else {
    yield put(userActions.fetchUsersSuccess(response));
  }
}

export default function* usersSaga() {
  yield takeLatest(userActions.fetchUsersStart, fetchUsers);
}
