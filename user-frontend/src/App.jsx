import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PostContainer } from "./pages/PostContainer";
import { SinglePost } from "./components/SinglePost";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/userSlice";

export const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch(login(user));
    }
  }, []);

  return (
    <BrowserRouter>
      <div className='font-inter'>
        <Navbar />
        <Routes>
          <Route path='/' element={<PostContainer />} />
          <Route path='/post/:id' element={<SinglePost />} />
          <Route
            path='/login'
            element={!user ? <Login /> : <Navigate to='/' />}
          />
          <Route
            path='/signup'
            element={!user ? <SignUp /> : <Navigate to='/' />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
