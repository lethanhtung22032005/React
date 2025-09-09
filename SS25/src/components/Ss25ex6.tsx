import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/home";
import Product from "../pages/Product";
import Detail from "../pages/Detail";

export default function Ss25ex6() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>
        </Router>
    );
}
