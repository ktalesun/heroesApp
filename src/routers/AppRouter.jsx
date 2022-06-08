import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<LoginScreen />} />
                <Route path="/*" element = {<DashboardRoutes />} />

                <Route path="*" element={<MarvelScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
