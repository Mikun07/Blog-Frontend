import React, { useState } from "react";
import EditForm from "../form/EditForm";

function EditModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="flex items-center text-white justify-center lg:p-6 p-2 lg:text-5xl text-3xl gap-3 bg-blue-800 lg:rounded-lg rounded-full"
      >
        <ion-icon name="create"></ion-icon>
        <p className="capitalize lg:flex hidden">Edit</p>
      </button>

      {modal && (
        <div>
          <div className=" bg-black/75 top-0 left-0 right-0 bottom-0 z-10 fixed w-full h-full"></div>
          <div className="bg-white fixed top-0 right-0 w-80 z-20 h-screen p-5  rounded-tl-lg rounded-bl-lg">
            <div className="flex items-center w-full justify-between mb-16">
              <h1 className="capitalize font-bold text-blue-800">Edit</h1>
              <button
                onClick={toggleModal}
                className="flex items-center text-black justify-center lg:text-5xl text-3xl gap-3 lg:rounded-lg rounded-full"
              >
                <ion-icon name="close"></ion-icon>
              </button>
            </div>

            <div>
              <EditForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditModal;
