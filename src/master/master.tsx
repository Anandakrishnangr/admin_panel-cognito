import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Loader, SnackbarProvider } from "../components";
import { useAuth } from "./hooks";
import { DashBoard } from "../modules/dashboard";
import { User } from "../modules/users";
import AppLayout from "./layouts/AppLayout";
import { ThemeProvider } from "./context/ThemeContext";

const Auth = React.lazy(() => import("../modules/auth/auth"));

const Master: React.FC = () => {
    const { isAuthenticated } = useAuth();
    return (
        <>
            <ThemeProvider>
                <Routes>
                    {!isAuthenticated ? <>
                        <Route path="/*" element={
                            <Suspense fallback={<Loader />}>
                                <Auth />
                            </Suspense>
                        }
                        />
                    </> : <>
                        <Route element={<AppLayout />}>
                            <Route path="/*" element={<Navigate to="/dashboard" />} />
                            <Route path="/dashboard/*" element={<DashBoard />} />
                            <Route path="/user/*" element={<User />} />
                        </Route>
                    </>}
                </Routes>
            </ThemeProvider>
            <SnackbarProvider />
        </>
    );
};

export default Master;
