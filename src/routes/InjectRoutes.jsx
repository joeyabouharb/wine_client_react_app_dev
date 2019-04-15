import React from 'react';
import {
  Switch,
  Route,
} from 'react-router';
import routes from './routes';

const InjectRoutes = () => (
  <Switch>
    {
      routes.map((
        {
          path, exact, component: Component, ...rest
        },
      ) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={props => (
            <Component {...props} {...rest} />
          )}
        />
      ))
    }
  </Switch>
);

export default InjectRoutes;
