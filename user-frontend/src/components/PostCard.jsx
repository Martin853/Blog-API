import React from "react";

export const PostCard = ({ post }) => {
  return (
    <div className='w-full h-fit p-6 bg-neutral-100 rounded-lg shadow-xl flex flex-col gap-3'>
      <img src={post.image} className='rounded shadow-xl' />
      <h1 className='text-lg font-normal'>{post.title}</h1>
    </div>
  );
};
