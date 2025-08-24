import React, { useState } from "react";

export default function Ss15ex2() {
    const [color, setColor] = useState("");
    const [submitted, setSubmitted] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(color);
    };

    return (
        <div>
            <h3>Color: {submitted}</h3>
            <form onSubmit={handleSubmit}>
                <label>Màu sắc</label>
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
