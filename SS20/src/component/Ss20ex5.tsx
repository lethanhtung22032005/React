import { useState, useEffect } from "react";

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
            console.log("Timer đã được dọn dẹp!");
        };
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: 40 }}>
            <h2>Bộ đếm: {count}</h2>
        </div>
    );
}

export default Timer;
