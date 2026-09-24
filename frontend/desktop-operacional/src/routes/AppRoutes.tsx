import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../features/company/Dashboard";
import { Login } from "../features/login/Login";



export function AppRoutes() {
    return(
        <Routes>
             <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}