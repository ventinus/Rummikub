import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import store from 'store';

// Import reducers
import rootReducer from 'reducers';

// Import layout components
import MainLayout from 'layouts/MainLayout';

// Import container components
import Welcome from 'containers/Welcome';
import Setup from 'containers/Setup';
import Game from 'containers/Game';
import NotFound from 'containers/NotFound';

import 'index.html';
import 'scss/global.scss';

// create redux store and sync it with the browserHistory
const history = syncHistoryWithStore(browserHistory, store);

// store.subscribe(() => { console.log(store.getState()); })

const checkPlayers = (nextState, replace) => {
  const { players } = store.getState().rummikub;

  if (players.length < 2) {
    replace(`/setup`);
  }
}

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ MainLayout }>
        <IndexRoute component={ Welcome } />
        <Route path="/setup" component={ Setup } />
        <Route path="/game" component={ Game } onEnter={ checkPlayers }/>
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
