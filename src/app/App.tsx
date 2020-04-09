import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { DashBoard } from './components/Dashboard';
import { Router, Route } from 'react-router-dom';
import { history } from './store/history';
import { Navigation } from './components/Navigation';
import { TaskDetail } from './modules/tasks/components/TaskDetails';

export const App = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <Navigation />
        <Route exact path="/dashboard" render={() => <DashBoard />} />
        <Route
          exact
          path="/task/:id"
          render={({ match }) => <TaskDetail id={match.params.id} />}
        />
      </div>
    </Provider>
  </Router>
);
