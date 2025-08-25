import React, { Component } from 'react';

interface StateType {
  isLoggedIn: boolean;
}

export default class LoginStatus extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  toggleLogin = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  render() {
    return (
      <div>
        <h2>
          {this.state.isLoggedIn
            ? "Xin chào, User!"
            : "Vui lòng đăng nhập để tiếp tục."}
        </h2>
        <button onClick={this.toggleLogin}>
          {this.state.isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
        </button>
      </div>
    );
  }
}
