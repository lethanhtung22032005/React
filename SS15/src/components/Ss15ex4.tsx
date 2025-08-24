import React, { useState } from "react";

export default function Ss15ex4() {
    const [progress, setProgress] = useState(0);
    const [submitted, setSubmitted] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(progress);
    };

    return (
        <div>
            <h3>Tiến độ hoàn thành: {submitted !== null ? submitted + " %" : "%"}</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={(e) => setProgress(Number(e.target.value))}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
