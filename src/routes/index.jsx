import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRoutes from './public'
import Index from 'pages/Index'

export const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'
                 element={
                <PublicRoutes>
                    <Index />
                </PublicRoutes>
                    } />
            </Routes>
        </BrowserRouter>
    )
}
