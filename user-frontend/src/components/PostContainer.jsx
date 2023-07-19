import React, { useEffect, useState } from "react";
import { PostCard } from "./PostCard";

export const PostContainer = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:3000/api/posts");
      const json = await response.json();

      if (response.ok) {
        setPosts(json);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='p-6 md:px-16 lg:px-24 flex flex-col w-full h-fit gap-6'>
      <h1 className='text-lg'>Posts</h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {posts &&
          posts.map((post) => {
            console.log(post);
            return <PostCard key={post._id} post={post} />;
          })}
      </div>
    </div>
  );
};
