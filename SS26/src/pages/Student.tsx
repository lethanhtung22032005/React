// import React from "react";
// import { useParams } from "react-router-dom";

// const Student: React.FC = () => {
//     const { name } = useParams<{ name: string }>();

//     return (
//         <div>
//             <h2>Thông tin sinh viên</h2>
//             <p>Tên sinh viên: {name}</p>
//         </div>
//     );
// };

// export default Student;

// src/component/Student.tsx
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Student: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputValue, setInputValue] = useState("");

    const studentName = searchParams.get("studentName");

    const handleSearch = () => {
        if (inputValue.trim() !== "") {
            setSearchParams({ studentName: inputValue });
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Tra cứu sinh viên</h2>
            <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{ padding: "5px", marginRight: "8px" }}
            />
            <button onClick={handleSearch} style={{ padding: "5px 12px" }}>
                Tìm kiếm
            </button>

            {studentName && (
                <p style={{ marginTop: "20px" }}>
                    Kết quả tìm kiếm: <b>{studentName}</b>
                </p>
            )}
        </div>
    );
};

export default Student;
