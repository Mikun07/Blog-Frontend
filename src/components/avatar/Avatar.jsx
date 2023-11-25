import React, { useState } from "react";

function Avatar({ name, email }) {
  return (
    <>
      <div className="w-full flex lg:gap-5 gap-2 items-center">
        <div className="avatar relative lg:w-28 w-14 lg:h-28 h-14 rounded-full shadow bg-gray-300 font-bold flex items-center justify-center text-lg">
          <h1 className=" capitalize">{name[0]}</h1>
        </div>

        <div className="flex flex-col lg:gap-2 gap-0">
          <p className="font-bold lg:text-4xl text-xs text-blue-800">
            {name}
          </p>
          <p className="font-medium lg:text-base text-xs text-gray-400">
            {email}
          </p>
        </div>
      </div>
    </>
  );
}

export default Avatar;
