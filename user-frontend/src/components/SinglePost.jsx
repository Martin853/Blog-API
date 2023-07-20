import React from "react";
import { useLocation } from "react-router-dom";
import { CommentSection } from "./CommentSection";

export const SinglePost = () => {
  const location = useLocation();
  const { post } = location.state;

  return (
    <div className='p-6 md:px-16 lg:px-24 w-full flex flex-col items-center justify-center gap-8'>
      <div className='w-full h-fit flex flex-col gap-5 items-center md:w-3/4'>
        <img src={post.image} className='rounded-lg shadow-xl md:h-80' />
        <h1 className='text-center font-bold text-xl place-self-start'>
          {post.title}
        </h1>
        <p>{post.description}</p>
      </div>
      <CommentSection post={post} />
    </div>
  );
};
