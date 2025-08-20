import React, { Component } from "react";

type State = {
    name: string;
};

class Exercise01 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: "Nguyễn Minh Sơn"
        };
    }

    render() {
        return (
            <div>
                <h2>Họ và tên: {this.state.name}</h2>
            </div>
        );
    }
}

export default Exercise01;
