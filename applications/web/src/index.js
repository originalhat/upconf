import AppContainer from './AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from "redux";
import {ConnectedRouter, routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from "history";
import {Provider} from "react-redux";
import rootReducer from "./AppReducer";
import {Route, Switch} from "react-router";
import * as firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyBmLCm5hvVGvpGLtEVy_gUTtrn3_i65PoI",
  authDomain: "upconf-45ed3.firebaseapp.com",
  databaseURL: "https://upconf-45ed3.firebaseio.com",
  projectId: "upconf-45ed3",
  storageBucket: "upconf-45ed3.appspot.com",
  messagingSenderId: "825288737604"
};

firebase.initializeApp(config);

export const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
    )
  )
);

function renderAppRoot() {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <AppContainer/>
            <Route exact path="/" render={() => <AppContainer/>}/>
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
}

store.subscribe(renderAppRoot);
renderAppRoot();