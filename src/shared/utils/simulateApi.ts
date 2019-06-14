import { call, put, takeLatest } from '@redux-saga/core/effects';
import { push } from 'connected-react-router';


export function* simulateApi(funcSuccess: any, funcError:Function): any {
  try {
      yield put(funcSuccess);
  } catch (error) {
    console.log('simulateApi >> error', error);
    yield put(funcError(error));
  }
}
