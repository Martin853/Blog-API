import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

export const AddComment = () => {
  // User Comment State
  const [userComment, setUserComment] = useState("");

  // Handle Click
  const handleClick = () => {};

  return (
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
  );
};
