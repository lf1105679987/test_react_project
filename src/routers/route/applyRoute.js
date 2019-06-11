import React from 'react';
import { Route } from 'react-router-dom';

// Consistent with Route, just for the convenience of passing props
export default ({ component: Component, props: cProps, ...rest }) =>
  <Route
    { ...rest }
    render={props =>
      <Component {...props} {...cProps} />
    }
  />;