import React from 'react';
import { Switch, Route } from 'react-router';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Register2 from '../auth/Register2';

// rafc - function based components
export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/register2" component={Register2}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </div>
  )
}
