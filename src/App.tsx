import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import configureAppStore from './redux/store';
import { ReduxRouter } from './middlewares/react-router-redux';

import { history } from './redux/store';
import Router from './Router';

function App() {
  return (
    <React.Fragment>
      <Provider store={configureAppStore()}>
        <div className='App'>
          <ReduxRouter history={history}>
            <Router />
          </ReduxRouter>
        </div>
      </Provider>
    </React.Fragment>
  );
}

export default App;
