import React, { useState, useEffect } from "react";

const KeyTracker = () => {
    const [lastKey, setLastKey] = useState("");

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            setLastKey(event.key);
        };

        window.addEventListener("keydown", handleKeyDown);

        // cleanup khi component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Phím bạn vừa nhấn:</h2>
            <div
                style={{
                    display: "inline-block",
                    padding: "20px",
                    border: "2px dashed black",
                    fontSize: "32px",
                    fontWeight: "bold"
                }}
            >
                [{lastKey}]
            </div>
        </div>
    );
};

export default KeyTracker;
