import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useSignup } from "../hooks/useSignup";

export const SignUp = () => {
  // Variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, loading } = useSignup();

  const [passwordVisible, setPasswordVisible] = useState("password");

  // Handle Submit

  const handleSubmit = async (event) => {
    event.preventDefault();

    await signup(email, password);
  };

  return (
    <div className='p-6 md:px-16 lg:px-24 w-full h-screen flex justify-center items-center'>
      <form
        className='w-full h-fit p-6 md:py-12 bg-neutral-100 rounded-md shadow-lg flex flex-col gap-4 md:w-5/6 md:text-xl'
        onSubmit={handleSubmit}
      >
        <h1 className='text-lg md:text-2xl'>Sign Up</h1>

        <label>Email</label>
        <input
          type='text'
          value={email}
          className=' w-full rounded p-2 shadow-md outline-none text-base'
          onChange={(event) => setEmail(event.target.value)}
        />

        <label>Password</label>
        <div className='w-full h-fit p-2 flex bg-white rounded shadow-md items-center'>
          <input
            type={passwordVisible}
            value={password}
            className=' w-full outline-none text-base'
            onChange={(event) => setPassword(event.target.value)}
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

        <button
          disabled={loading}
          className='w-full h-fit mt-2 py-1 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out select-none'
        >
          Sign Up
        </button>
        {error && (
          <div className='w-full bg-red-200 border border-red-700 h-fit p-6 rounded-md text-center text-red-700'>
            {error}
          </div>
        )}
      </form>
    </div>
  );
};
