import React from "react";

export const DashboardNavigation = () => {
  return (
    <div className='w-full mt-4 py-4 px-3 bg-neutral-100 flex flex-col justify-between items-center rounded-md shadow-lg gap-4'>
      <button className='w-full border-y py-2 hover:bg-neutral-200 transition-all duration-300 ease-in-out md:text-xl'>
        Add Post
      </button>
      <button className='w-full border-y py-2 hover:bg-neutral-200 transition-all duration-300 ease-in-out md:text-xl'>
        Edit Posts
      </button>
      <button className='w-full border-y py-2 hover:bg-neutral-200 transition-all duration-300 ease-in-out md:text-xl'>
        Delete Posts
      </button>
    </div>
  );
};
