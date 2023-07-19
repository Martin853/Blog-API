import React from "react";
import { Link } from "react-router-dom";

export const PostCard = ({ post }) => {
  const postUrl = post.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className='w-full h-fit p-6 bg-neutral-100 rounded-lg shadow-xl flex flex-col gap-3'>
      <img src={post.image} className='rounded shadow-xl' />
      <h1 className='text-lg font-normal text-center'>{post.title}</h1>
      <Link
        to={`/post/${postUrl}`}
        state={{ post }}
        className='w-full h-fit p-2 text-center border border-black rounded-xl text-lg hover:bg-black hover:text-white transition-all duration-500 ease-in-out'
      >
        View Post
      </Link>
    </div>
  );
};
