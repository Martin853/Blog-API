import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PostContainer } from "./pages/PostContainer";
import { SinglePost } from "./components/SinglePost";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { useDispatch } from "react-redux";
import { login } from "./redux/userSlice";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch(login(user));
    }
  });

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
