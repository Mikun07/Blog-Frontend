import React from "react";

function EditPostForm() {
  return (
    <>
      <form action="" className="flex flex-col gap-y-10">
        <div className="grid grid-cols-2 items-center">
          <label htmlFor="" className=" font-medium">
            Title:
          </label>
          <input
            type="text"
            className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
          />
        </div>

        <div className="grid grid-cols-2 items-center">
          <label htmlFor="" className=" font-medium">
            Author:
          </label>
          <input
            type="text"
            className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
          />
        </div>

        <div className="grid grid-cols-2 items-center">
          <label htmlFor="" className=" font-medium">
            Content:
          </label>
          <textarea
            type="text"
            className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
          />
        </div>

        <div className="grid grid-cols-2 items-center">
          <label htmlFor="" className=" font-medium">
            Date:
          </label>
          <input
            type="date"
            className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
          />
        </div>

        <div className="flex justify-center">
          <button className="cursor-pointer text-white bg-blue-800 rounded-md px-4 py-2 capitalize text-xl font-bold hover:scale-105 duration-200">
            Edit Post
          </button>
        </div>
      </form>
    </>
  );
}

export default EditPostForm;
