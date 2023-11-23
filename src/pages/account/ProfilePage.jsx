import React, { useState } from "react";
import Avatar from "../../components/avatar/Avatar";
import InfoInput from "../../components/input/InfoInput";
import EditModal from "../../components/modal/EditModal";

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

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="flex flex-col justify-between lg:px-8 p-4 ">
        <div className="flex w-full items-center justify-between">
          <div className="">
            <Avatar />
          </div>

          <div>
            <EditModal />
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
          <button
            onClick={toggleModal}
            className="flex items-center text-white justify-center lg:p-6 p-2 lg:text-5xl text-3xl gap-3 bg-red-600 lg:rounded-lg rounded-full"
          >
            <ion-icon name="trash-outline"></ion-icon>
            <p className="capitalize lg:flex hidden">Delete Account</p>
          </button>

          {/* {modal && (
            <div>
              <div className=" bg-black/75 top-0 left-0 right-0 bottom-0 z-10 fixed w-full h-full"></div>
              <div className="bg-white p-5 absolute top-[40%] left-[50%] z-20 rounded-lg">
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <h1 className="capitalize font-bold ">Confirm</h1>

                  <div className="flex gap-6">
                    <button className="flex items-center text-white justify-center p-6 gap-3 bg-red-600 rounded-lg">
                      <p className="capitalize">Delete</p>
                    </button>
                    <button
                      onClick={toggleModal}
                      className="flex items-center text-blue-800 justify-center p-6 gap-3 bg-transparent border-blue-800 border-2 rounded-lg"
                    >
                      <p className="capitalize">Cancel</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
