import React, { Component } from "react";

type State = {
    id: number;
    name: string;
    dob: string;
    address: string;
};

class Exercise02 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            id: 1,
            name: "Nguyễn Văn Sơn",
            dob: "20/12/2023",
            address: "Thanh Xuân, Hà Nội"
        };
    }

    render() {
        return (
            <div>
                <h2>Thông tin cá nhân</h2>
                <p>id: {this.state.id}</p>
                <p>Tên: {this.state.name}</p>
                <p>Ngày sinh: {this.state.dob}</p>
                <p>Địa chỉ: {this.state.address}</p>
            </div>
        );
    }
}

export default Exercise02;
