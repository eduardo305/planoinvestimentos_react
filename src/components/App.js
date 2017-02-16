import React, { Component } from 'react';
import GrommetApp from 'grommet/components/App';
import logo from '../logo.svg';
import TopBar from './TopBar';
import LoginForm from './LoginForm';
import '../styles/App.scss';
import '../styles/index.scss';

class App extends Component {
  render() {
    return (
      <GrommetApp centered={ true }>
        <TopBar />
        <LoginForm />
      </GrommetApp>
    );
  }
}

export default App;
