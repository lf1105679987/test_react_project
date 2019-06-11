import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Route without authentication
export default ({ component: Component, props: cProps, ...rest }) =>
  <Route
    { ...rest }
    render={props => {
      if (cProps.authenticated) {
        const state = rest.location.state || { from: { pathname: '/' } };
        return (
          <Redirect to={ state.from } />
        );
      }
      return (
        <Component { ...props } { ...cProps } />
      );
    }}
  />;