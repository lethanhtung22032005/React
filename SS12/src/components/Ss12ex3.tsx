function Ss12ex3() {
    const user = {
        name: "Nguyễn Văn A",
        gender: "Nam",
        dob: "06/03/2024",
        email: "nva@gmail.com",
        address: "Thanh Xuân, Hà Nội",
    };

    return (
        <div>
            <h2>Thông tin cá nhân</h2>
            <ul>
                <li>Họ và tên: <b>{user.name}</b></li>
                <li>Giới tính: {user.gender}</li>
                <li>Ngày sinh: {user.dob}</li>
                <li>Email: {user.email}</li>
                <li>Địa chỉ: {user.address}</li>
            </ul>
        </div>
    );
}

export default Ss12ex3;
