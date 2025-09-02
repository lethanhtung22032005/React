import { useEffect } from "react";

function Welcome() {
    useEffect(() => {
        console.log("Component đã được render lần đầu!");
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: 40 }}>
            <h2 style={{ border: "1px solid black", display: "inline-block", padding: "12px 24px" }}>
                Chào mừng bạn đến với ứng dụng của chúng tôi!
            </h2>
        </div>
    );
}

export default Welcome;
