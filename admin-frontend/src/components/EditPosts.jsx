import React, { useEffect, useState } from "react";
import { EditPostCard } from "./EditPostCard";

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
        {posts && posts.map((post) => <EditPostCard post={post} />)}
      </div>
    </div>
  );
};
