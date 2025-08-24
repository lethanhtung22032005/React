import React from "react";

export default function Ss15ex5() {
    const students = [
        {
            id: "SV001",
            name: "Nguyễn Văn A",
            dob: "21/12/2023",
            email: "nva@gmail.com",
            status: "Đang hoạt động",
        },
        {
            id: "SV002",
            name: "Nguyễn Thị B",
            dob: "21/11/2022",
            email: "ntb@gmail.com",
            status: "Ngừng hoạt động",
        },
    ];

    return (
        <div>
            <h2>Quản lý sinh viên</h2>
            <button>Thêm mới sinh viên</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã sinh viên</th>
                        <th>Tên sinh viên</th>
                        <th>Ngày sinh</th>
                        <th>Email</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s, i) => (
                        <tr key={s.id}>
                            <td>{i + 1}</td>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.dob}</td>
                            <td>{s.email}</td>
                            <td>{s.status}</td>
                            <td>
                                <button>Chặn</button>
                                <button>Sửa</button>
                                <button>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
            </div>
        </div>
    );
}
