import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';

export const AppRouter = () => {
return (
    <>
    <Routes>
        <Route index element={
        <LoginPage />
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

    </Routes>
    </>
)
  }
