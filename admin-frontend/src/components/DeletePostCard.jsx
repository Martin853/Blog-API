import React from "react";

export const DeletePostCard = ({ post }) => {
  return (
    <div
      key={post._id}
      className='w-full h-full flex flex-col justify-between gap-3 items-center p-4 flex-grow'
    >
      <img src={post.image} className='rounded' />
      <h1 className='text-sm md:text-lg font-semibold text-center'>
        {post.title}
      </h1>
      <button
        onClick={() => {
          deletePost(post._id);
        }}
        className='w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
      >
        Delete
      </button>
    </div>
  );
};
