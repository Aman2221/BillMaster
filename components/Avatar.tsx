import Image from "next/image";
import React from "react";

const Avatar = () => {
  const imgUrl = false;
  const showDummy = false;

  return (
    <div>
      {showDummy ? (
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      ) : (
        <>
          {imgUrl ? (
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="w-10 h-10 rounded-full"
              src="/docs/images/people/profile-picture-5.jpg"
              alt="Rounded avatar"
            />
          ) : (
            <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                JL
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Avatar;
