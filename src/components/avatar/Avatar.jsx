import React, { useState } from "react";

function Avatar() {
  const [profile] = useState({
    FirstName: "Ayomikun",
    LastName: "Festus-Olaleye",
    Name: "Festus-Olaleye Ayomikun",
    Email: "ayomikunolaleye@gmail.com",
    UserName: "Mikun07",
    Avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/656.jpg",
  });
  return (
    <>
      <div className="w-full flex lg:gap-5 gap-2 items-center">
        <div className="avatar relative lg:w-[200px] w-14 lg:h-[200px] h-14 rounded-full shadow bg-gray-300 font-bold flex items-center justify-center text-lg">
          {profile.Avatar ? (
            <img
              src={profile.Avatar}
              alt="user__avatar"
              className="absolute w-full h-full rounded-full"
            />
          ) : (
            `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
          )}
        </div>

        <div className="flex flex-col lg:gap-2 gap-0">
            <p className="font-bold lg:text-4xl text-xs text-blue-800">{profile.Name}</p>
            <p className="font-medium lg:text-base text-xs text-gray-400">{profile.Email}</p>
        </div>
      </div>
    </>
  );
}

export default Avatar;
