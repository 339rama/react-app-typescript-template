import MainPagesIndex from 'modules/main/ui/pages';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/">
        <MainPagesIndex />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
