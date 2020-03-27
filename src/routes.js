import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Incident from './pages/Incident';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />

        <Route path="/profile" exact component={Profile} />
        <Route path="/incidents/new" exact component={Incident} />
      </Switch>
    </BrowserRouter>
  );
}
