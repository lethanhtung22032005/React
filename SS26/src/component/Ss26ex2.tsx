// src/component/Ss26ex2.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Student from "../pages/Student";

const Ss26ex2: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Trang chủ - Bài tập Student</h1>
        <nav>
          <Link to="/student/nam">Sinh viên Nam</Link> |{" "}
          <Link to="/student/hoa">Sinh viên Hoa</Link>
        </nav>

        <Routes>
          <Route path="/student/:name" element={<Student />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Ss26ex2;
