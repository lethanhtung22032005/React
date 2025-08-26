import { useState } from "react"

interface Product {
    id: number
    name: string
    price: number
    quantity: number
}

function ProductInfo() {
    const [product] = useState<Product>({
        id: 1,
        name: "Coca cola",
        price: 1000,
        quantity: 10,
    })

    return (
        <>
            <h3>Thông tin sản phẩm</h3>
            <p>Id: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Price: {product.price} $</p>
            <p>Quantity: {product.quantity}</p>
        </>
    )
}

export default ProductInfo
