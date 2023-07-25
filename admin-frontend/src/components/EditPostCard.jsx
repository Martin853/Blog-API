import React, { useState } from "react";
import { useSelector } from "react-redux";

export const EditPostCard = ({ post, setPosts }) => {
  const user = useSelector((state) => state.user.value);

  const [postTitle, setPostTitle] = useState(post.title);
  const [postDescription, setPostDescription] = useState(post.description);
  const [postImage, setPostImage] = useState(post.image);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEdit = () => {
    saveChanges();
    closeModal();
  };

  const saveChanges = () => {
    fetch(`${import.meta.env.VITE_API}/api/posts/${post._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        title: postTitle,
        description: postDescription,
        image: postImage,
      }),
    }).then((res) => {
      if (res.ok) {
        setPosts((prevPosts) =>
          prevPosts.map((prevPost) =>
            prevPost._id === post._id
              ? {
                  ...prevPost,
                  title: postTitle,
                  description: postDescription,
                  image: postImage,
                }
              : prevPost
          )
        );
        closeModal();
      }
    });
  };

  return (
    <div>
      <div className='w-full h-full flex flex-col justify-between gap-3 items-center p-4 flex-grow'>
        <img src={post.image} className='rounded' alt={post.title} />
        <h1 className='text-sm md:text-lg font-semibold text-center'>
          {post.title}
        </h1>
        <button
          onClick={openModal}
          className='w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        >
          Edit
        </button>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='absolute inset-0 bg-black opacity-50'></div>
          <div className='w-3/4 h-fit p-4 bg-white rounded-lg z-10 flex flex-col gap-3'>
            <h1 className='text-lg md:text-2xl font-semibold'>Edit Post</h1>

            <label className='text-xl'>Post Title</label>
            <input
              type='text'
              value={postTitle}
              className='w-full border-2 p-2 rounded-md outline-none focus:border-blue-700'
              onChange={(event) => {
                setPostTitle(event.target.value);
              }}
            />

            <label className='text-xl'>Post Content</label>
            <textarea
              value={postDescription}
              rows={4}
              className='w-full border-2 p-2 rounded-md outline-none focus:border-blue-700'
              onChange={(event) => {
                setPostDescription(event.target.value);
              }}
            />

            <label className='text-xl'>Post Image (URL)</label>
            <input
              type='url'
              value={postImage}
              className='w-full border-2 p-2 rounded-md outline-none focus:border-blue-700'
              onChange={(event) => {
                setPostImage(event.target.value);
              }}
            />

            <div className='flex flex-col sm:flex-row gap-3'>
              <button
                className='w-full h-fit p-3 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-all duration-300 ease-in-out'
                onClick={handleEdit}
              >
                Save Changes
              </button>
              <button
                className='w-full h-fit p-3 bg-red-600 hover:bg-red-700 rounded-lg text-white transition-all duration-300 ease-in-out'
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
