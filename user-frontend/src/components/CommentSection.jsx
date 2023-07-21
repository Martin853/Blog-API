import React, { useEffect, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineSend } from "react-icons/ai";

export const CommentSection = ({ post }) => {
  // User
  const user = useSelector((state) => state.user.value);

  // Variables
  const [comments, setComments] = useState([]);
  const id = post._id;

  // User Comment State
  const [userComment, setUserComment] = useState("");

  // Handle Click
  const handleClick = async () => {
    console.log(userComment);
  };

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
      {!user && (
        <div className='w-full'>
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
        </div>
      )}

      {user && (
        <div className='w-full h-fit flex flex-col gap-2'>
          <span>Add a comment</span>
          <div className='w-full h-full flex items-center gap-2'>
            <input
              type='text'
              value={userComment}
              onChange={(event) => {
                setUserComment(event.target.value);
              }}
              className='w-4/5 sm:w-11/12 h-full border border-gray-950 rounded-md px-2 py-3 outline-none shadow-lg'
            />
            <div
              onClick={handleClick}
              className='w-1/5 sm:w-1/12 border border-gray-950 rounded-md h-full flex justify-center items-center text-xl py-3 outline-none shadow-lg hover:cursor-pointer hover:bg-gray-950 hover:text-white transition-all duration-200 ease-in'
            >
              <AiOutlineSend />
            </div>
          </div>
        </div>
      )}

      <div className='w-full flex flex-col gap-5'>
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <div
                key={comment._id}
                className='w-full h-fit p-4 bg-neutral-100 rounded-md shadow-lg shadow-neutral-300 text-lg flex flex-col gap-3'
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
