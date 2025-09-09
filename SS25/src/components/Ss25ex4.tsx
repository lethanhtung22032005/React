import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";

const Ss25ex4 = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
};

export default Ss25ex4;
