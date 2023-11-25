import React from "react";
import Sidebar from "../../components/navbar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";

function ProfileLayout() {
  return (
    <>
      <div className="w-full flex items-start overflow-hidden">
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
