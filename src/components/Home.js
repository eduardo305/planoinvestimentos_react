import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return <p>This is a Home Page</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Home;
