import React, { Component } from "react";

type Props = {
    name: string;
};

class Ss13ex4_con extends Component<Props> {
    render() {
        return (
            <h2>Họ và tên bên component con: {this.props.name}</h2>
        );
    }
}

export default Ss13ex4_con;
