import React, { useState } from "react";

function CardAvatar() {
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
        <div className="avatar relative w-10 h-10 rounded-full shadow bg-gray-300 font-bold flex items-center justify-center">
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

        <p className="font-bold text-xs text-blue-800">{profile.Name}</p>
      </div>
    </>
  );
}

export default CardAvatar;
