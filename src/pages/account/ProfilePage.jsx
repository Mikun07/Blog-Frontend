import React, { useState } from "react";
import Avatar from "../../components/avatar/Avatar";
import InfoInput from "../../components/input/InfoInput";

function ProfilePage() {
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
      <div className="flex flex-col justify-between lg:px-8 p-4 ">
        <div className="flex w-full items-center justify-between">
          <div className="">
            <Avatar />
          </div>

          <div>
            <button className="flex items-center text-white justify-center lg:p-6 p-2 lg:text-5xl text-3xl gap-3 bg-blue-800 lg:rounded-lg rounded-full">
              <ion-icon name="create"></ion-icon>
              <p className="capitalize lg:flex hidden">Edit</p>
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mt-12 grid lg:grid-cols-2 grid-cols-1 lg:gap-14 gap-2">
            <InfoInput UserName="username" Info={profile.UserName} />

            <InfoInput UserName="Firstname" Info={profile.FirstName} />

            <InfoInput UserName="Lastname" Info={profile.LastName} />

            <InfoInput UserName="email" Info={profile.Email} />
          </div>
        </div>

        <div className=" flex justify-center mt-10">
          <button className="flex items-center text-white justify-center lg:p-6 p-2 lg:text-5xl text-3xl gap-3 bg-red-600 lg:rounded-lg rounded-full">
          <ion-icon name="trash-outline"></ion-icon>
            <p className="capitalize lg:flex hidden">Delete Account</p>
          </button>
        </div>

      </div>
    </>
  );
}

export default ProfilePage;
