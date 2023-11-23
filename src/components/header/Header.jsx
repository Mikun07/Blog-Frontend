import React, { useEffect, useState } from "react";

function Header() {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate();
  });
  return (
    <>
      <header className="bg-white  py-3 px-1 rounded-2xl flex items-center justify-end ">
        <div className="flex gap-4 items-center">
          <span className=" font-semibold text-xs lg:text-base">
            {new Date().toDateString()}
          </span>

          <div className="relative flex">
            <button className=" bg-transparent w-[35px] h-[35px] shadow-md shadow-gray-300 border-2 rounded-lg flex items-center justify-center">
              <ion-icon name="notifications"></ion-icon>
            </button>
            <span className="bg-red-600 shadow-sm shadow-red-500 text-white w-4 h-4 text-xs flex justify-center rounded-full absolute left-[-6px] top-[-6px]">
              2
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
