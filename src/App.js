import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './routers/routers';
const App = () => {
  // const [authenticating, setAuthenticating] = useState();  //正在登陆中状态
  // const [authenticated, setAuthenticated] = useState(false);  //已登录
  const [authProps, setAuthProps] = useState({
    authenticated: false //已登录
  });
  useEffect(() => {
    getUserInfo().then(res => {
      if (res && res.a === 1) {
        // setAuthenticating(false);
        setAuthProps({
          authenticated: true
        });
      }
    }).catch(err => {
      console.warn('miss user info');
    });
    
  }, [])
  const getUserInfo = () => {
    /**
     * 这里做一些判断是否登录的问题，用于页面刷新或者长时间页面停留
     */
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = {a:0};
        if (user) {
          resolve(user);
        } else {
          reject();
        }
      }, 300);
    });
  }
  return (
    <div className="App">
      <Routes routeProps={ authProps } />
    </div>
  );
}

export default withRouter(App);