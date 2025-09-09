const Register = () => {
    return (
        <div style={{ width: "300px", margin: "50px auto", textAlign: "center" }}>
            <h2>Create account</h2>
            <form>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="email"
                        placeholder="Your email"
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="password"
                        placeholder="Password"
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "8px",
                        background: "blue",
                        color: "white",
                        border: "none",
                    }}
                >
                    Create an account
                </button>
            </form>
            <p style={{ marginTop: "10px", fontSize: "14px" }}>
                Already have an account? <a href="/login">Login here</a>
            </p>
        </div>
    );
};

export default Register;
