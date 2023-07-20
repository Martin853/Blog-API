import React, { useEffect, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link } from "react-router-dom";

export const CommentSection = ({ post }) => {
  const [comments, setComments] = useState([]);
  const id = post._id;

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `http://localhost:3000/api/posts/${id}/comments`
      );
      const json = await response.json();

      if (response.ok) {
        setComments(json);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className='w-full h-fit md:w-3/4 flex flex-col items-start gap-3'>
      <h1 className='font-bold text-xl'>Comments</h1>
      <div className='w-full p-6 text-center mt-2 text-lg'>
        <Link className='font-semibold' to={"/signup"}>
          Sign Up
        </Link>{" "}
        or{" "}
        <Link className='font-semibold' to={"/login"}>
          Login
        </Link>{" "}
        to comment
      </div>
      <div className='w-full flex flex-col gap-3'>
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <div
                key={comment._id}
                className='w-full h-fit p-4 bg-neutral-50 rounded-md shadow-lg shadow-neutral-300 text-lg flex flex-col gap-3'
              >
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
          })
        ) : (
          <div className='w-full p-6 text-center mt-2 text-lg'>
            There are no comments for this post
          </div>
        )}
      </div>
    </div>
  );
};
