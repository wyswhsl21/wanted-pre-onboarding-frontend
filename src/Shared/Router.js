import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import LoginPage from "./../Pages/LoginPage";
import SignupPage from "./../Pages/SignupPage";
import TodosPage from "./../Pages/TodosPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
