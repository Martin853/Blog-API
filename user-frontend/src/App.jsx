import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PostContainer } from "./pages/PostContainer";
import { SinglePost } from "./components/SinglePost";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

export const App = () => {
  return (
    <BrowserRouter>
      <div className='font-inter'>
        <Navbar />
        <Routes>
          <Route path='/' element={<PostContainer />} />
          <Route path='/post/:id' element={<SinglePost />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
