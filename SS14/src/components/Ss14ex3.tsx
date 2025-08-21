import React, { Component } from "react";
interface State {
    company: string;
}

class Ss14ex3 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            company: "Rikkei Academy"
        };
    }
    changeState = () => {
        this.setState({ company: "RikkeiSoft" });
    };

    render() {
        return (
            <div>
                <h2>Company: {this.state.company}</h2>
                <button onClick={this.changeState}>Change state</button>
            </div>
        );
    }
}

export default Ss14ex3;
