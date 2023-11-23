import React, { useState } from "react";
import LOGO from "../../../public/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const [nav, setNav] = useState(false);
  const { pathname } = useLocation();

  const menu = [
    {
      name: "Profile",
      link: "/profile/account",
      icon: "person-circle-outline",
    },
    {
      name: "Manage Post",
      link: "/profile/managepost",
      icon: "file-tray-full-sharp",
    },
   
  ];
  return (
    <>
      <div className=" lg:w-96 w-24 overflow-hidden h-screen flex flex-col justify-between bg-blue-800 lg:py-10 py-6">
        <div className="flex items-center justify-center gap-2">
          <img src={LOGO} alt="" />
          <p className="lg:flex text-2xl hidden font-bold text-white">
            Binary blog
          </p>
        </div>

        <ul className="flex flex-col items-center justify-center gap-2 mt-12">
          {menu.map(({ id, link, name, icon }) => (
            <Link
              key={id}
              onClick={() => setNav(!nav)}
              to={link}
              className={
                pathname === link
                  ? "flex items-center lg:justify-start justify-center gap-6 text-black w-full lg:py-2 py-4 lg:pl-4 bg-white rounded-tl rounded-bl lg:text-5xl text-3xl"
                  : "flex items-center lg:justify-start justify-center gap-6 text-white w-full lg:py-2 py-4 lg:pl-4 lg:text-5xl text-3xl"
              }
            >
              <ion-icon name={icon}></ion-icon>
              <p
                className={
                  pathname === link
                    ? "lg:flex text-2xl hidden capitalize font-bold text-black"
                    : "lg:flex text-2xl hidden capitalize font-bold text-white"
                }
              >
                {name}
              </p>
            </Link>
          ))}
        </ul>

        <div className="flex items-center cursor-pointer lg:justify-start justify-center gap-6 text-red-700 w-full lg:py-2 py-4 lg:pl-4 lg:text-5xl text-3xl">
          <ion-icon name="log-out-outline"></ion-icon>
          <p className="lg:flex text-2xl hidden capitalize font-bold">Logout</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
