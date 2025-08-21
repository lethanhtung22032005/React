import React, { Component } from "react";
import type { FormEvent } from "react";

interface Product {
    productCode: string;
    productName: string;
    price: number;
    quantity: number;
}

interface State {
    productCode: string;
    productName: string;
    price: string;
    quantity: string;
}

class Ss14ex5 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            productCode: "",
            productName: "",
            price: "",
            quantity: ""
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.name]: e.target.value } as unknown as State);
    };

    handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const product: Product = {
            productCode: this.state.productCode,
            productName: this.state.productName,
            price: Number(this.state.price),
            quantity: Number(this.state.quantity)
        };
        console.log(product);
    };

    render() {
        return (
            <div>
                <h2>Thêm mới sản phẩm</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Mã sản phẩm: </label>
                        <input
                            type="text"
                            name="productCode"
                            value={this.state.productCode}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Tên sản phẩm: </label>
                        <input
                            type="text"
                            name="productName"
                            value={this.state.productName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Giá: </label>
                        <input
                            type="number"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Số lượng: </label>
                        <input
                            type="number"
                            name="quantity"
                            value={this.state.quantity}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit">Đăng ký</button>
                </form>
            </div>
        );
    }
}

export default Ss14ex5;
