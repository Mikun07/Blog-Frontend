import React from "react";

function EditForm() {
  return (
    <>
      <form action="" className="flex flex-col gap-y-10">
        <div className="grid grid-cols-2 items-center">
          <label htmlFor="" className=" font-medium">
            Username:
          </label>
          <input
            type="text"
            className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
          />
        </div>

        <div className="grid grid-cols-2 items-center">
          <label htmlFor="" className=" font-medium">
            Firstname:
          </label>
          <input
            type="text"
            className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
          />
        </div>

        <div className="grid grid-cols-2 items-center">
          <label htmlFor="" className=" font-medium">
            Lastname:
          </label>
          <input
            type="text"
            className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
          />
        </div>

        <div className="grid grid-cols-2 items-center">
          <label htmlFor="" className=" font-medium">
            Email:
          </label>
          <input
            type="email"
            className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
          />
        </div>

        <div className="flex justify-center">
          <button className="cursor-pointer text-white bg-blue-800 rounded-md px-4 py-2 capitalize text-xl font-bold hover:scale-105 duration-200">
            Edit
          </button>
        </div>
      </form>
    </>
  );
}

export default EditForm;
