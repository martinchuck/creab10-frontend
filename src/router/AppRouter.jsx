import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../components/MainPage';
import { Welcome } from '../components/Welcome';
import { getAuthToken } from '../shared/login';
import { MainPageRegister } from '../components/MainPageRegister';


export const AppRouter = () => {
    const token = getAuthToken()
return (
    <>
    <Routes>
        <Route index element={
        <MainPage />
        } />
        <Route path="/login" element={<MainPage />} />
        <Route path="/register" element={<MainPageRegister />} />
        <Route path="/dashboard" element={<Welcome />}/>

    </Routes>
    </>
)
  }
