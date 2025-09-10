// src/component/Ss26ex1.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <h2>Chi tiết sản phẩm</h2>
            <p>ID sản phẩm: {id}</p>
        </div>
    );
};

const Ss26ex1: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <h1>Trang chủ</h1>
                <nav>
                    <Link to="/product/12">Sản phẩm 12</Link> |{" "}
                    <Link to="/product/abc123">Sản phẩm abc123</Link>
                </nav>

                <Routes>
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Ss26ex1;
