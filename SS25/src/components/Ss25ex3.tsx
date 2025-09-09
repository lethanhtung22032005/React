import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";

const Ss25ex3 = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default Ss25ex3;
