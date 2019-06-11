import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// The route that can be entered after the authentication is passed.
export default ({ component: Component, props: cProps, ...rest }) =>
  <Route
    { ...rest }
    render={props => {
      return cProps.authenticated ? (
        <Component { ...props } { ...cProps } />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }}
  />;