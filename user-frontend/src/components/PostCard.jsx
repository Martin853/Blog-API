import React, { useState } from "react";
import { Link } from "react-router-dom";

export const PostCard = ({ post }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const postUrl = post.title.toLowerCase().replace(/\s+/g, "-");

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className='w-full h-full p-6 bg-neutral-100 rounded-lg shadow-xl flex flex-col gap-3 justify-between'>
      {!imageLoaded && (
        <div className='w-full h-fit p-16 animate-pulse bg-gray-200 dark:bg-gray-300 flex justify-center items-center rounded-lg'>
          <svg
            className='w-10 h-10 text-gray-300 dark:text-gray-400 dark:text-gray-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 16 20'
          >
            <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
            <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
          </svg>
        </div>
      )}
      <img
        src={post.image}
        className='rounded shadow-xl'
        onLoad={handleImageLoad}
      />
      <h1 className='text-lg font-normal text-center'>{post.title}</h1>
      <Link
        to={`/post/${postUrl}`}
        state={{ post }}
        className='w-full h-fit p-2 text-center border border-black rounded-xl text-lg hover:bg-black hover:text-white transition-all duration-500 ease-in-out'
      >
        View Post
      </Link>
    </div>
  );
};
