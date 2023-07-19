import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PostContainer } from "./pages/PostContainer";

export const App = () => {
  return (
    <BrowserRouter>
      <div className='font-inter'>
        <Navbar />
        <Routes>
          <Route element={<PostContainer />} path='/' />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
