import React from "react";
import Sidebar from "../../components/navbar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";

function ProfileLayout() {
  return (
    <>
      <div className="w-full flex items-start overflow-hidden">
        <Sidebar />
        <div className="w-full p-1 h-screen">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ProfileLayout;
