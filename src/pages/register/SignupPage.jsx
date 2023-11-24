import React from "react";
import LOGO from "../../assets/header.svg";
import { Link } from "react-router-dom";
import LeftView from "./leftview";
import SignUpForm from "./SignUpForm";

function SignupPage() {

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Link
          to={"/"}
          className="flex items-center absolute cursor-pointer gap-2 lg:top-10 top-3 lg:left-10 left-3"
        >
          <img src={LOGO} alt="" />
          <p className=" font-bold capitalize text-lg">Binary blog</p>
        </Link>

        <div className="lg:w-[1000px] lg:h-[500px] rounded flex md:items-center">
          <LeftView />
          <SignUpForm />
        </div>
      </div>
    </>
  );
}

export default SignupPage;