import React, { Component } from 'react';

interface StateType {
  count: number;
}

export default class ClickCounter extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Số lần click: {this.state.count}</h2>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
