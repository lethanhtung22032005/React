// src/component/Ss26ex3.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Student from "../pages/Student";

const Ss26ex3: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <h1>Trang chủ - Bài tập Student (SearchParams)</h1>
                <nav>
                    <Link to="/student">Đi đến trang Student</Link>
                </nav>

                <Routes>
                    <Route path="/student" element={<Student />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Ss26ex3;
