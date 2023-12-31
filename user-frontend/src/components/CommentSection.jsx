import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CommentCard } from "./CommentCard";
import { AddComment } from "./AddComment";

export const CommentSection = ({ post }) => {
  // User
  const user = useSelector((state) => state.user.value);

  // Variables
  const [comments, setComments] = useState([]);
  const id = post._id;

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API}/api/posts/${id}/comments`
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

      {user && <AddComment postId={id} setComments={setComments} />}

      <div className='w-full flex flex-col gap-5'>
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <CommentCard
                key={comment._id}
                comment={comment}
                setComments={setComments}
              />
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
