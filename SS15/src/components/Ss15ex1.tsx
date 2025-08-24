import React, { useState } from "react";

export default function Ss15ex1() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(email);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {submitted && <pre>{JSON.stringify({ email: submitted })}</pre>}
        </div>
    );
}
