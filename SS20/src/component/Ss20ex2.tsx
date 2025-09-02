import { useState } from "react";

function UserProfile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div style={{ maxWidth: 500, margin: "24px auto" }}>
            <h3>Thông tin người dùng</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nhập tên"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: "100%", padding: 8, marginBottom: 8, borderRadius: 6, border: "1px solid #ccc" }}
                />
                <input
                    type="email"
                    placeholder="Nhập email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%", padding: 8, marginBottom: 8, borderRadius: 6, border: "1px solid #ccc" }}
                />
                <button type="submit" style={{ padding: "8px 16px", borderRadius: 6, background: "#28a745", color: "#fff" }}>
                    Gửi
                </button>
            </form>

            {submitted && (
                <div style={{ marginTop: 16, padding: 12, borderRadius: 6, background: "#e6f9e6" }}>
                    <p><b>Tên:</b> {name}</p>
                    <p><b>Email:</b> {email}</p>
                </div>
            )}
        </div>
    );
}

export default UserProfile;
