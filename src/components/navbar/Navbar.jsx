import React from "react";
import LOGO from "../../assets/header.svg";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white h-20 lg:px-10 px-4 justify-between fixed w-full flex items-center text-center border-b-2">
        <Link to={"/"} className="flex items-center cursor-pointer gap-2">
          <img src={LOGO} alt="" />
          <p className=" font-bold capitalize lg:text-lg">Binary blog</p>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer lg:px-4 py-2 capitalize lg:text-xl font-bold hover:scale-105 duration-200"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="cursor-pointer text-white bg-blue-800 rounded-md px-4 py-2 capitalize lg:text-xl font-bold hover:scale-105 duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
