import React, { Component } from "react";
import Ss13ex4_con from "./Ss13ex4_con";

type State = {
    name: string;
};

class Ss13ex4_cha extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: "Nguyễn Văn Nam"
        };
    }

    render() {
        return (
            <div>
                <h2>Họ và tên bên component cha: {this.state.name}</h2>
                <Ss13ex4_con name={this.state.name} />
            </div>
        );
    }
}

export default Ss13ex4_cha;
