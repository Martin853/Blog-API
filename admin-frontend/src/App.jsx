import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";

export const App = () => {
  return (
    <div className='font-inter w-full h-screen px-4 sm:px-12 md:px-24 lg:px-32'>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
