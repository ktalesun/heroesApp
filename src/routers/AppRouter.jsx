import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../heroes/components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>


                <Route path="login" element={
                    <PublicRoutes>
                        <LoginScreen />
                    </PublicRoutes>
                } />

                <Route path="/*" element={
                    <PrivateRoutes>
                        <DashboardRoutes/>
                    </PrivateRoutes>
                } />
                
                {/* <Route path="login" element={<LoginScreen />} /> */}

            </Routes>
        </BrowserRouter>
    )
}
