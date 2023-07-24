import React from "react";

export const AddPost = () => {
  return (
    <div className='w-full flex flex-col items-center gap-3'>
      <h1 className='text-xl font-semibold'>Add Post</h1>
      <form className='w-full flex flex-col gap-5'>
        <label>Post Title</label>
        <input
          type='text'
          className='border border-neutral-200 rounded-md p-1 outline-none focus:border-indigo-700'
        />

        <label>Post Content</label>
        <textarea
          className='border border-neutral-200 rounded-md p-1 outline-none focus:border-indigo-700'
          rows={4}
        />

        <label>Post Image (URL)</label>
        <input
          type='url'
          className='border border-neutral-200 rounded-md p-1 outline-none focus:border-indigo-700'
        />

        <button className='w-full p-2 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out'>
          Create
        </button>
      </form>
    </div>
  );
};
