import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { Reducer, StoreEnhancer, configureStore } from '@reduxjs/toolkit';
import { createRouterMiddleware } from '../middlewares/react-router-redux';
import { createInjectorsEnhancer } from 'redux-injectors';
import createReducer from './reducers';

const history = createBrowserHistory();

let store;

export default function configureAppStore(reducers?: Record<string, Reducer>) {
  const routerMiddleware = createRouterMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();

  const { run: runSaga } = sagaMiddleware;

  const middlewares = [routerMiddleware, sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({ createReducer, runSaga }),
  ] as StoreEnhancer[];

  store = configureStore({
    reducer: createReducer(reducers),
    middleware: (getDefaultMiddlewares) =>
      getDefaultMiddlewares().concat(middlewares),
    enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(enhancers),
    devTools: true,
  });

  return store;
}

export { history, store };
