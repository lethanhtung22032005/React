import { useState } from "react";

function StringLengthChecker() {
    const [text, setText] = useState("");
    const tooLong = text.length > 5;

    return (
        <div style={{ maxWidth: 500, margin: "24px auto" }}>
            <h3>Kiểm tra độ dài chuỗi nhập vào</h3>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nhập vào đây"
                style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
            />
            {tooLong && (
                <p style={{ marginTop: 8, padding: 8, borderRadius: 6, background: "#fde2e1", color: "#a61b1b" }}>
                    Chuỗi nhập dài hơn 5 ký tự!
                </p>
            )}
        </div>
    );
}

export default StringLengthChecker;
