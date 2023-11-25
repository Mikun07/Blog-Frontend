import React from "react";
import LOGO from "../../assets/logo.svg";

function LeftView() {
  return (
    <>
      <div className="h-[400px] w-[400px] rounded-tl rounded-bl bg-blue-800 lg:flex md:hidden sm:hidden hidden flex-col gap-5 justify-center items-center">
        <img src={LOGO} alt="" />

        <h1 className="capitalize font-bold text-white">Binary Blog</h1>
      </div>
    </>
  );
}

export default LeftView;
