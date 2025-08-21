import React, { Component } from "react";

interface State {
    slogan: string;
}

class Ss14ex4 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            slogan: "Học code để đi làm"
        };
    }

    changeState = () => {
        this.setState({ slogan: "Học code sẽ thành công. Cố lên!!!" });
    };
    shouldComponentUpdate(nextProps: {}, nextState: State) {
        if (nextState.slogan !== this.state.slogan) {
            return false;
        }
        return true;
    }

    render() {
        console.log("Render đã chạy");
        return (
            <div>
                <h2>Slogan: "{this.state.slogan}"</h2>
                <button onClick={this.changeState}>Change state</button>
            </div>
        );
    }
}

export default Ss14ex4;
