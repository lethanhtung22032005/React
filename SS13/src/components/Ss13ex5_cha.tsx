import React, { Component } from "react";
import Ss13ex5_con from "./Ss13ex5_con";

type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

type State = {
    product: Product;
};

class Ss13ex5_cha extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            product: {
                id: 1,
                name: "Bưởi ba roi",
                price: 12000,
                quantity: 6
            }
        };
    }

    render() {
        return (
            <div>
                <Ss13ex5_con product={this.state.product} />
            </div>
        );
    }
}

export default Ss13ex5_cha;
