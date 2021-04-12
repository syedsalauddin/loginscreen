import React from 'react';
import { Switch, Route } from 'react-router';
import Login from '../auth/Login';
import Register from '../auth/Register';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </div>
  )
}
