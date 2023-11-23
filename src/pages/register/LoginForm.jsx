import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center h-full border-2 border-blue-800 lg:rounded-tr lg:rounded-br rounded-none lg:mx-0 mx-3 lg:px-10 px-2 lg:py-0 py-6">
        <form action="" className="flex flex-col gap-y-10">
          <div className=" flex items-center justify-center font-bold text-4xl text-blue-800 ">
            Login
          </div>

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
              Password:
            </label>
            <input
              type="password"
              className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
            />
          </div>

          <div className="flex justify-center">
            <button className="cursor-pointer text-white bg-blue-800 rounded-md px-4 py-2 capitalize text-xl font-bold hover:scale-105 duration-200">
              Log in
            </button>
          </div>
        </form>

        <div>
          <p className="cursor-pointer capitalize lg:text-xl font-bold">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-800 cursor-pointer capitalize lg:text-xl font-bold hover:scale-105 duration-200"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
