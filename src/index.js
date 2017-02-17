import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import SigninForm from './components/auth/SigninForm';
import Signup from './components/auth/Signup';
import Signout from './components/auth/Signout';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="signin" component={ SigninForm } />
        <Route path="signup" component={ Signup } />
        <Route path="signout" component={ Signout } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
