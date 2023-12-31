import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { logout } = useLogout();
  const user = useSelector((state) => state.user.value);

  return (
    <div className='w-full'>
      <div className='w-full h-fit p-8 bg-neutral-100 flex justify-between items-center md:px-16 lg:px-24 shadow-lg'>
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
        <div className='hidden md:flex gap-4 text-lg font-medium items-center'>
          {user && (
            <div className='flex gap-3 items-center'>
              <span className='text-base'>{user.email}</span>
              <button
                className='text-neutral-600 hover:text-neutral-900'
                onClick={() => logout()}
              >
                Log out
              </button>
            </div>
          )}
          {!user && (
            <div className='flex gap-3 items-center'>
              <Link
                to={"/signup"}
                className='text-neutral-600 hover:text-neutral-900'
              >
                Sign Up
              </Link>
              <Link
                to={"/login"}
                className='text-neutral-600 hover:text-neutral-900'
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
      {openMenu && (
        <div className='w-full h-fit flex flex-col bg-neutral-50 p-8 gap-3 md:hidden'>
          {user && (
            <div className='w-full flex flex-col gap-3'>
              <span className='w-full py-2 border-y text-center border-y-neutral-200 hover:bg-neutral-100 transition-all duration-300 ease-linear'>
                {user.email}
              </span>
              <button
                className='w-full py-2 border-y text-center border-y-neutral-200 hover:bg-neutral-100 transition-all duration-300 ease-linear'
                onClick={() => logout()}
              >
                Log out
              </button>
            </div>
          )}

          {!user && (
            <div className='w-full flex flex-col gap-3'>
              <Link
                to={"/signup"}
                className='w-full py-2 border-y text-center border-y-neutral-200 hover:bg-neutral-100 transition-all duration-300 ease-linear'
              >
                Sign Up
              </Link>
              <Link
                to={"/login"}
                className='w-full py-2 border-y text-center border-y-neutral-200 hover:bg-neutral-100 transition-all duration-300 ease-linear'
              >
                Login
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
