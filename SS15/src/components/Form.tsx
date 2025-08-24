import { Component } from 'react'

interface StateType {
    name: string;
    email: string;
}

export default class Form extends Component<{}, StateType> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: '',
            email: ''
        };
    }

    submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Biểu mẫu đã được nộp ✅");
        console.log("Họ và tên:", this.state.name);
        console.log("Email:", this.state.email);
    }

    handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <label htmlFor="name">Họ và tên:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleInput}
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleInput}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}
