import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

export const CommentCard = ({ comment, setComments }) => {
  const user = useSelector((state) => state.user.value);
  let token;
  if (user) {
    token = user.token;
  }
  let decodedToken;
  if (token) {
    decodedToken = jwt_decode(token);
  }
  const userId = comment.userId;

  const deleteComment = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API}/api/posts/${comment.postId}/comments/${
        comment._id
      }`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      fetchComments();
    }
  };

  const fetchComments = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API}/api/posts/${comment.postId}/comments`
    );
    const json = await response.json();

    if (response.ok) {
      setComments(json);
    }
  };

  return (
    <div className='w-full h-fit p-4 bg-neutral-100 rounded-md shadow-lg shadow-neutral-300 text-lg flex flex-col gap-3'>
      <div className='flex flex-col gap-3 items-start sm:flex-row sm:items-center w-full'>
        <div className='w-full sm:w-fit flex gap-3'>
          <h1 className='font-bold text-base sm:text-lg'>{comment.email}</h1>
          {userId && decodedToken && userId === decodedToken._id && (
            <AiFillDelete
              onClick={deleteComment}
              className='block sm:hidden ml-auto text-2xl hover:cursor-pointer'
            />
          )}
        </div>
        <h1 className='text-base text-gray-600'>
          {formatDistanceToNow(new Date(comment.createdAt), {
            addSuffix: true,
          })}
        </h1>
        {userId && decodedToken && userId === decodedToken._id && (
          <AiFillDelete
            onClick={deleteComment}
            className='hidden sm:block ml-auto text-2xl hover:cursor-pointer'
          />
        )}
      </div>
      <p>{comment.content}</p>
    </div>
  );
};
