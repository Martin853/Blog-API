import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='w-full'>
      <div className='w-full h-fit p-8 bg-neutral-100 flex justify-between items-center md:px-16 lg:px-24'>
        <Link to={"/"} className='text-3xl font-bold'>
          Blog
        </Link>
        <div className='md:hidden'>
          {!openMenu && (
            <AiOutlineMenu
              className='text-2xl'
              onClick={() => {
                setOpenMenu(true);
              }}
            />
          )}
          {openMenu && (
            <AiOutlineClose
              className='text-2xl'
              onClick={() => {
                setOpenMenu(false);
              }}
            />
          )}
        </div>
        <div className='hidden md:flex gap-4 text-lg font-medium '>
          <button className='text-neutral-600 hover:text-neutral-900'>
            Sign Up
          </button>
          <button className='text-neutral-600 hover:text-neutral-900'>
            Login
          </button>
        </div>
      </div>
      {openMenu && (
        <div className='w-full h-fit flex flex-col bg-neutral-50 p-8 gap-3 md:hidden'>
          <button className='w-full py-2 border-y border-y-neutral-200 hover:bg-neutral-100 transition-all duration-300 ease-linear'>
            Sign Up
          </button>
          <button className='w-full py-2 border-y border-y-neutral-200 hover:bg-neutral-100 transition-all duration-300 ease-linear'>
            Login
          </button>
        </div>
      )}
    </div>
  );
};
