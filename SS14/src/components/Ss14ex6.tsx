import React, { Component } from "react";

type State = {
    gender: string;
};

class Ss14ex6 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            gender: "" // chưa chọn gì
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ gender: e.target.value });
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Giới tính đã chọn:", this.state.gender);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Giới tính:</h3>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Nam"
                        checked={this.state.gender === "Nam"}
                        onChange={this.handleChange}
                    />
                    Nam
                </label>
                <br />

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Nữ"
                        checked={this.state.gender === "Nữ"}
                        onChange={this.handleChange}
                    />
                    Nữ
                </label>
                <br />

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Khác"
                        checked={this.state.gender === "Khác"}
                        onChange={this.handleChange}
                    />
                    Khác
                </label>
                <br />

                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Ss14ex6;
