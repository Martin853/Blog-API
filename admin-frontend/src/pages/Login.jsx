import React from "react";

export const Login = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <form className='w-full px-4 bg-neutral-100 shadow-lg rounded-md h-72 md:h-3/6 flex flex-col justify-center items-start gap-4 md:py-8 md:text-2xl md:justify-between'>
        <h1 className='text-xl font-bold md:text-3xl'>Login</h1>

        <label>Username</label>
        <input
          type='text'
          className='w-full rounded-md p-1 border border-neutral-200 shadow-md md:text-xl'
        ></input>

        <label>Password</label>
        <input
          type='password'
          className='w-full rounded-md p-1 border border-neutral-200 shadow-md md:text-xl '
        ></input>

        <button className='w-full border border-black p-1 rounded-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out'>
          Login
        </button>
      </form>
    </div>
  );
};
