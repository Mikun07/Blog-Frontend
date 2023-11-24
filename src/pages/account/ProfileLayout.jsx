import React from "react";
import Sidebar from "../../components/navbar/Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../../components/header/header";

function ProfileLayout() {
  return (
    <>
      <div className="w-full flex items-start ">
        <div className="h-full">
          <Sidebar />
        </div>
        <div className="w-full p-1 h-screen">
          <div className=" ">
            <Header />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ProfileLayout;
