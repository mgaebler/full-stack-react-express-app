import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { DashBoard } from './components/Dashboard';
import { Router, Route } from 'react-router-dom';
import { history } from './store/history';
import { Navigation } from './components/Navigation';

export const App = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <Navigation />
        <Route exact path="/dashboard" render={() => <DashBoard />} />
      </div>
    </Provider>
  </Router>
);
