import React, { useState } from "react";
import { useSelector } from "react-redux";

export const AddPost = () => {
  const user = useSelector((state) => state.user.value);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();

    fetch(`${import.meta.env.VITE_API}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        title,
        description: content,
        image: url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setError(data.error);
      });
  };

  return (
    <div className='w-full flex flex-col items-center gap-3'>
      <h1 className='text-xl font-semibold'>Add Post</h1>
      <form className='w-full flex flex-col gap-5'>
        <label>Post Title</label>
        <input
          type='text'
          className='border border-neutral-200 rounded-md p-1 outline-none focus:border-indigo-700'
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
        />

        <label>Post Content</label>
        <textarea
          className='border border-neutral-200 rounded-md p-1 outline-none focus:border-indigo-700'
          rows={4}
          onChange={(event) => {
            setContent(event.target.value);
          }}
          value={content}
        />

        <label>Post Image (URL)</label>
        <input
          type='url'
          className='border border-neutral-200 rounded-md p-1 outline-none focus:border-indigo-700'
          onChange={(event) => {
            setUrl(event.target.value);
          }}
          value={url}
        />

        {error && (
          <div className='w-full bg-red-300 border border-red-600 h-fit p-4 rounded-md text-center'>
            {error}
          </div>
        )}

        <button
          onClick={handleClick}
          className='w-full p-2 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out'
        >
          Create
        </button>
      </form>
    </div>
  );
};
