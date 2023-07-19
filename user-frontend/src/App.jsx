import React from "react";
import { Navbar } from "./components/Navbar";
import { PostContainer } from "./components/PostContainer";

export const App = () => {
  return (
    <div className='font-inter'>
      <Navbar />
      <PostContainer />
    </div>
  );
};
