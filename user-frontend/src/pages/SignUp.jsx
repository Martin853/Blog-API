import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState("password");

  return (
    <div className='p-6 md:px-16 lg:px-24 w-full h-screen flex justify-center items-center'>
      <form className='w-full h-fit p-6 bg-neutral-100 rounded-md shadow-lg flex flex-col gap-4 md:w-5/6 md:text-xl'>
        <h1 className='text-lg md:text-2xl'>Sign Up</h1>

        <label>Email</label>
        <input
          type='text'
          className=' w-full rounded p-2 shadow-md outline-none'
        />

        <label>Password</label>
        <div className='w-full h-fit p-2 flex bg-white rounded shadow-md items-center'>
          <input
            type={passwordVisible}
            className=' w-full outline-none'
          ></input>
          {passwordVisible == "password" ? (
            <AiFillEye
              onClick={() => setPasswordVisible("text")}
              className='hover:cursor-pointer'
            />
          ) : (
            <AiFillEyeInvisible
              onClick={() => setPasswordVisible("password")}
              className='hover:cursor-pointer'
            />
          )}
        </div>

        <button className='w-full h-fit mt-2 py-1 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out select-none'>
          Sign Up
        </button>
      </form>
    </div>
  );
};
