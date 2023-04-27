import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import { MainPage } from '../components/MainPage';

export const AppRouter = () => {
return (
    <>
    <Routes>
        <Route index element={
        <MainPage />
        } />
        <Route path="/login" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />

    </Routes>
    </>
)
  }
