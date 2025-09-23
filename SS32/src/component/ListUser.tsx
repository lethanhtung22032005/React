
import { useSelector } from "react-redux";
import { RootState } from "../store/userReducer";

function ListUser() {
    const users = useSelector((state: RootState) => state.users);

    return (
        <table border={1} cellPadding={10} style={{ margin: "20px auto" }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tên</th>
                    <th>Giới tính</th>
                    <th>Ngày sinh</th>
                    <th>Địa chỉ</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {users.map((u) => (
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.userName}</td>
                        <td>{u.gender}</td>
                        <td>{u.dateBirth}</td>
                        <td>{u.address}</td>
                        <td>
                            <button>Sửa</button>
                            <button>Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListUser;
