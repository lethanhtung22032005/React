import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter: React.FC = () => {
    const [isAuth] = useState<boolean>(false);

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
