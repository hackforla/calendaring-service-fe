import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null
    };
  }

  render() {
    return (
      <h1>Hello there</h1>
    );
  }
}
