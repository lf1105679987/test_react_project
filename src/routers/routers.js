import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import ApplyRoute from './route/applyRoute';
import AuthRoute from './route/authRoute';
import UnAuthRoute from './route/unAuthRoute';

import AsyncComponent from '../components/AsyncComponent';
const Login = AsyncComponent(() => import('../components/Login'/* webpackChunkName: 'login' */));
const NotFound = AsyncComponent(() => import('../components/NotFound'/* webpackChunkName: 'notfonud' */));
const Layout = AsyncComponent(() => import('../components/Layout'/* webpackChunkName: 'layout' */));
export default ({routeProps}) => {
  return (
    <Switch>
      <Redirect exact from="/" to="/book" />
      <ApplyRoute path="/404" props={ routeProps } component={ NotFound } /> 
      <UnAuthRoute path="/login" props={ routeProps } component={ Login } />
      {/* layout frame */}
      <AuthRoute path="/book" props={ routeProps } component={ Layout } />
      <AuthRoute path="/movie" props={ routeProps } component={ Layout } />
      <Redirect from="*" to='/404' />
    </Switch>
  );
};