import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export const CommentCard = ({ comment }) => {
  return (
    <div className='w-full h-fit p-4 bg-neutral-100 rounded-md shadow-lg shadow-neutral-300 text-lg flex flex-col gap-3'>
      <div className='flex gap-3 items-center'>
        <h1 className='font-bold'>User</h1>
        <h1 className='text-base text-gray-600'>
          {formatDistanceToNow(new Date(comment.createdAt), {
            addSuffix: true,
          })}
        </h1>
      </div>
      <p>{comment.content}</p>
    </div>
  );
};
