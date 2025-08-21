import React, { Component } from "react";
interface State {
    userName: string;
}
class Exersice01 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            userName: "Tùng Lê"
        };
    }

    componentDidMount() {
        console.log("Component đã mount, userName:", this.state.userName);
    }

    render() {
        return (
            <div>
                <h1>Xin chào, {this.state.userName}!</h1>
            </div>
        );
    }
}

export default Exersice01;