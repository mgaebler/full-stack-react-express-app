import React, { ReactNode, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { DashBoard } from './components/Dashboard';
import { Router, Route, match } from 'react-router-dom';
import { Redirect } from 'react-router';
import { history } from './store/history';
import { Navigation } from './components/Navigation';
import { TaskDetail } from './modules/tasks/components/TaskDetails';
import { Login } from './modules/session/components/Login';

const RouteGuard = (Component) => ({ match }: { match: match }) => {
  console.info('Route Guard', match);
  if (!store.getState().session.authenticated) {
    return <Redirect to="/" />;
  } else {
    return <Component match={match} />;
  }
};

export const App = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <Navigation />
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" render={RouteGuard(DashBoard)} />
        <Route exact path="/task/:id" render={RouteGuard(TaskDetail)} />
      </div>
    </Provider>
  </Router>
);
