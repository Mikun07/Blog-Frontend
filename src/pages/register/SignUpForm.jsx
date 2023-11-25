import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { BASE_URL } from "../../config/api";

function SignUpForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    let item = { name, username, email, password };

    try {
      let result = await axios.post(
        `${BASE_URL}/api/register`,
        item,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (result.status == '201') {
        navigate('/login')
      } else {
      }
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
    }
  }

  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center h-[400px] border-2 border-blue-800 lg:rounded-tr lg:rounded-br rounded-none lg:mx-0 mx-3 lg:px-10 px-2 lg:py-0 py-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signUp();
          }}
          className="flex flex-col gap-y-5"
        >
          <div className=" flex items-center justify-center font-bold text-lg text-blue-800 ">
            Sign Up
          </div>

          <div className="grid grid-cols-2 items-center">
            <label htmlFor="name" className=" font-medium">
              Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
            />
          </div>

          <div className="grid grid-cols-2 items-center">
            <label htmlFor="" className=" font-medium">
              Username:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
            />
          </div>

          <div className="grid grid-cols-2 items-center">
            <label htmlFor="" className=" font-medium">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
            />
          </div>

          <div className="grid grid-cols-2 items-center">
            <label htmlFor="" className=" capitalize font-medium">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="cursor-pointer text-white bg-blue-800 rounded-md px-4 py-2 capitalize text-lg font-bold hover:scale-105 duration-200"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div>
          <p className="cursor-pointer capitalize lg:text-xl font-bold">
            I already have an account{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-800 cursor-pointer capitalize text-lg font-bold hover:scale-105 duration-200"
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
