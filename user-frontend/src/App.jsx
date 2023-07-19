import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PostContainer } from "./pages/PostContainer";
import { SinglePost } from "./components/SinglePost";

export const App = () => {
  return (
    <BrowserRouter>
      <div className='font-inter'>
        <Navbar />
        <Routes>
          <Route path='/' element={<PostContainer />} />
          <Route path='/post/:id' element={<SinglePost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
