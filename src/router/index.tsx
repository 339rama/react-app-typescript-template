import React from 'react';
import { Route, Switch } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/">
        <div>
          <h1>Main Page</h1>
        </div>
      </Route>
    </Switch>
  );
};

export default AppRoutes;
