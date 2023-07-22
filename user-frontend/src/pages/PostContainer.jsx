import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PostCard } from "../components/PostCard";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { PostCardSkeleton } from "../components/PostCardSkeleton";

export const PostContainer = () => {
  const [posts, setPosts] = useState(null);
  const user = useSelector((state) => state.user.value);

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
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
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
