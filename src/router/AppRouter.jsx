import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../components/component-login/MainPage";
import { Welcome } from "../components/Welcome";
import { getAuthToken } from "../shared/login";
import { MainPageRegister } from "../components/component-login/MainPageRegister";
import { MainRegisteredPage } from "../components/component-login/MainRegisteredPage";
import Course from "../components/courses/Course";

export const AppRouter = () => {
  const token = getAuthToken();
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/login" element={<MainPage />} />
        <Route path="/register" element={<MainPageRegister />} />
        <Route path="/registered" element={<MainRegisteredPage />} />
        <Route path="/dashboard" element={<Welcome />} />
        <Route path="/course/:id" element={<Course />} />
      </Routes>
    </>
  );
};
