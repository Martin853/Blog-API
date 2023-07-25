import React from "react";
import { useSelector } from "react-redux";

export const DeletePostCard = ({ post, setPosts }) => {
  const user = useSelector((state) => state.user.value);

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
          setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
        }
        return res.json();
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

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
