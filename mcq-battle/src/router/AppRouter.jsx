import React from "react";
import { Route, Routes } from "react-router-dom";
import { Urls } from "../constant/Urls";
import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import SignupPage from "../pages/signup.page";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={Urls.Home()} element={<HomePage />} />
      <Route path={Urls.Signup()} element={<SignupPage />} />
      <Route path={Urls.Login()} element={<LoginPage />} />
    </Routes>
  );
};

export default AppRouter;
