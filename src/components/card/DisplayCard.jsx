import React, { useState } from "react";
import LOGO from "../../assets/logo.svg";

function DisplayCard(props) {
  const { blog } = props;

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="lg:w-[300px] w-full h-full flex flex-col rounded-lg shadow-md">
        <div className="bg-blue-800 w-[300px] h-[200px] flex items-center justify-center rounded-tr-lg rounded-tl-lg">
          <img src={LOGO} alt="" className="w-[300px] h-[200px]" />
        </div>

        <div className="w-[300px] px-2 gap-2 flex flex-col">
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold capitalize truncate">{blog?.title}</h2>
            <p className="font-bold text-blue-800">{blog?.author}</p>
            <h3 className="font-semibold capitalize truncate">
              {new Date(blog?.date).toDateString()}
            </h3>
            <p className="text-justify text-gray-600 font-normal leading-6 tracking-tighter line-clamp-4">
              {blog?.content}
            </p>
          </div>

          <div className="w-[280px] mt-1 mb-3 flex items-center justify-between">
            <button
              onClick={toggleModal}
              className="font-bold px-2 py-3 text-blue-800 bg-transparent border-2 border-blue-800 rounded-lg"
            >
              see more
            </button>

            {modal && (
              <div>
                <div className="bg-black/75 top-0 left-0 right-0 bottom-0 z-10 absolute w-full h-full"></div>
                <div className="bg-white absolute top-[20%] left-[35%] lg:w-[500px] z-20 p-5 rounded-lg">
                  <div className="flex items-center w-full lg:justify-between gap-5 mb-5">
                    <button
                      onClick={toggleModal}
                      className="flex items-center text-black justify-center lg:text-5xl text-3xl gap-3 lg:rounded-lg rounded-full"
                    >
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </div>

                  <div className="flex flex-col gap-6">
                    <h2 className="font-semibold capitalize">{blog?.title}</h2>
                    <div className="flex w-full justify-between">
                      <p className="font-bold text-blue-800">{blog?.author}</p>
                      <h3 className="font-semibold capitalize">
                        {new Date(blog?.date).toDateString()}
                      </h3>
                    </div>
                    <p className="text-justify text-gray-600 font-normal leading-6 tracking-tighter">
                      {blog?.content}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayCard;
