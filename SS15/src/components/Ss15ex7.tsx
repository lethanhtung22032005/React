import React, { Component } from "react";

type StateType = {
    time: string;
};

export default class Ss15ex7 extends Component<{}, StateType> {
    intervalId: any;

    constructor(props: {}) {
        super(props);
        this.state = { time: new Date().toLocaleTimeString() };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div>
                <h2>Thời gian hiện tại: {this.state.time}</h2>
            </div>
        );
    }
}
