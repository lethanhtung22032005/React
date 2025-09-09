const Login = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <div style={{ width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
                <h2 style={{ textAlign: "center" }}>Login account</h2>
                <form>
                    <div style={{ marginBottom: "15px" }}>
                        <label>Your email</label>
                        <input
                            type="email"
                            placeholder="name@company.com"
                            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                        />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="******"
                            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                        />
                    </div>
                    <button type="submit" style={{ width: "100%", padding: "10px", background: "blue", color: "white", border: "none", borderRadius: "5px" }}>
                        Login an account
                    </button>
                </form>
                <p style={{ marginTop: "15px", textAlign: "center", fontSize: "14px" }}>
                    Already have an account? <a href="#">Register here</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
