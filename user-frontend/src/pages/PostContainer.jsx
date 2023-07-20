import React, { useEffect, useState } from "react";
import { PostCard } from "../components/PostCard";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const PostContainer = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${import.meta.env.VITE_API}/api/posts`);
      const json = await response.json();

      if (response.ok) {
        setPosts(json);
      }
    };

    fetchPosts();
  }, []);

  if (!posts) {
    return (
      <div className='p-6 md:px-16 lg:px-24 flex flex-col w-full h-screen gap-6'>
        <h1 className='text-lg'>Posts</h1>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-3xl font-medium'>Loading...</h1>
            <AiOutlineLoading3Quarters className='text-4xl animate-spin' />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='p-6 md:px-16 lg:px-24 flex flex-col w-full h-fit gap-6'>
      <h1 className='text-lg'>Posts</h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {posts &&
          posts.map((post) => {
            return <PostCard key={post._id} post={post} />;
          })}
      </div>
    </div>
  );
};
