import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";

const Ss27ex2 = () => {
    return (
        <Router>
            <nav className="p-4 bg-gray-200 flex space-x-4">
                <Link to="/products" className="text-blue-600 font-semibold">
                    Products
                </Link>
            </nav>

            <Routes>
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
};

export default Ss27ex2;
