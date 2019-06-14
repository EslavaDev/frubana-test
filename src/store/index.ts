import {
  createStore,
  combineReducers,
  applyMiddleware,
  Reducer,
  AnyAction,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { all } from '@redux-saga/core/effects';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaul
import data from './orders.json';

// Reducers & Sagas
import { sidenavReducer } from './sidenav/reducer';
import { dataOrdersReducer } from './data';

import { authReducer, authSagas } from './auth/index';




const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

export const history = createBrowserHistory();

const metaReducers: Reducer<any, any> = combineReducers({
  auth: authReducer,
  router: connectRouter(history),
  sidenav: sidenavReducer,
  orders: dataOrdersReducer

});

// Saga
function* rootSaga() {
  yield all([
    ...authSagas,
  ]);
}

const sagaMiddleware = createSagaMiddleware();

// Middlewares
const middlewares: any = [sagaMiddleware, routerMiddleware(history), logger];
const persistedReducer = persistReducer(persistConfig, metaReducers);
const store = createStore(persistedReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

/* mock of realtime action */
let timerId: any = null;
let index = 0;

function getRandom(min = 1, max = 10) {
  let result = Math.random();
  result = result * (max - min + 1) + min;
  result = Math.floor(result);
  return result * 1000;
}

function startEvent(delay: number) {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    store.dispatch({
      type: '@@ORDERS/ADD_ORDER',
      payload: {
        order: data[index]
      }
    });
    if (index < (data.length - 1)) {
      index += 1;
      return startEvent(getRandom());
    }
    return
  }, delay)
}

startEvent(getRandom());

let persistor = persistStore(store);

export { store, persistor };
export default store;
