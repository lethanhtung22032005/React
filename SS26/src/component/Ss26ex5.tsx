// src/component/Ss26ex5.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../pages/Login";
import Account from "../pages/Account";
import PrivateRouter from "../pages/PrivateRouter";

const Ss26ex5: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <h1>Demo Private Router</h1>
                <nav>
                    <Link to="/login">Login</Link> |{" "}
                    <Link to="/account">Account</Link>
                </nav>

                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route element={<PrivateRouter />}>
                        <Route path="/account" element={<Account />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Ss26ex5;
