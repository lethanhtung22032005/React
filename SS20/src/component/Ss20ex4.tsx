import { useState, useEffect } from "react";

function PageTitle() {
    const [name, setName] = useState("");

    useEffect(() => {
        if (name) {
            document.title = `Chào mừng ${name} đến với ứng dụng!`;
        } else {
            document.title = "Chào mừng bạn đến với ứng dụng!";
        }
    }, [name]);

    return (
        <div style={{ maxWidth: 500, margin: "24px auto" }}>
            <h3>Nhập tên của bạn</h3>
            <input
                type="text"
                placeholder="Nhập tên..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
            />
        </div>
    );
}

export default PageTitle;
