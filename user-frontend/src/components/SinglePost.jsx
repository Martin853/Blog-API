import React from "react";
import { useLocation } from "react-router-dom";

export const SinglePost = () => {
  const location = useLocation();
  const { post } = location.state;
  console.log(post);

  return (
    <div className='p-6 md:px-16 lg:px-24 w-full flex justify-center'>
      <div className='w-full h-fit flex flex-col gap-5 items-center md:w-3/4'>
        <img src={post.image} className='rounded-lg shadow-xl' />
        <h1 className='text-center font-bold text-xl place-self-start'>
          {post.title}
        </h1>
        <p>{post.description}</p>
      </div>
    </div>
  );
};
