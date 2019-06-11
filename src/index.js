import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
import configureStore from './configureStore';
import App from './App';
import './index.less';
const { history, store } = configureStore();
// ReactDOM.render(<App />, document.getElementById('root'));
const render = Component => {
  if (document.getElementById('root')) {
    ReactDOM.render(
      <Provider store={ store }>
        <Router history={ history }>
          <Component />
        </Router>
      </Provider>,
        document.getElementById('root')
    );
  }
}

render(App);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
