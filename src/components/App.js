import React, { Component } from 'react';
import GrommetApp from 'grommet/components/App';
import TopBar from './TopBar';
import '../styles/App.scss';
import '../styles/index.scss';

class App extends Component {
  render() {
    return (
      <GrommetApp centered={ true }>
        <TopBar />
        { this.props.children }
      </GrommetApp>
    );
  }
}

export default App;
