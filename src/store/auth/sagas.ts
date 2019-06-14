import { call, put, takeLatest } from '@redux-saga/core/effects';
import { push } from 'connected-react-router';

import { logIn, logInSuccess, authError } from './actions';
import { AuthActionsType } from './actions.name';
import { simulateApi } from '../../shared/utils/simulateApi';

export function* login(action: any): IterableIterator<any> {
  try {
    yield simulateApi(logInSuccess(action.flag), authError)
  } catch (error) {
    console.log('login >> error', error);
    yield put(authError(error));
  }
}

export const authSagas = [takeLatest(AuthActionsType.LOGIN, login)];
