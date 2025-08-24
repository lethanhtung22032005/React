import React, { useState } from "react";

export default function Ss15ex3() {
    const [date, setDate] = useState("");
    const [submitted, setSubmitted] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(date);
    };

    return (
        <div>
            <h3>Ngày sinh: {submitted}</h3>
            <form onSubmit={handleSubmit}>
                <label>Ngày sinh:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
