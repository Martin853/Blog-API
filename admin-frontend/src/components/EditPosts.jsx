import React, { useEffect, useState } from "react";

export const EditPosts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/api/posts`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  });

  return (
    <div className='w-full flex flex-col gap-4 items-center'>
      <h1 className='text-xl font-semibold'>Edit Posts</h1>
      <div className='w-full h-fit p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto'>
        {posts &&
          posts.map((post) => (
            <div
              key={post._id}
              className='w-full h-full flex flex-col justify-between gap-3 items-center p-4 flex-grow'
            >
              <img src={post.image} className='rounded' />
              <h1 className='text-sm md:text-lg font-semibold text-center'>
                {post.title}
              </h1>
              <button
                onClick={() => {}}
                className='w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
              >
                Edit
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
