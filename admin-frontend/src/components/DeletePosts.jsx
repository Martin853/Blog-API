import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DeletePostCard } from "./DeletePostCard";

export const DeletePosts = () => {
  const user = useSelector((state) => state.user.value);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/api/posts`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  });

  const deletePost = (id) => {
    fetch(`${import.meta.env.VITE_API}/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          setPosts(posts.filter((post) => post.id !== id));
        }
        return res.json();
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <div className='w-full flex flex-col gap-4 items-center'>
      <h1 className='text-xl font-semibold'>Delete Posts</h1>
      <div className='w-full h-fit p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto'>
        {posts && posts.map((post) => <DeletePostCard post={post} />)}
      </div>
    </div>
  );
};
