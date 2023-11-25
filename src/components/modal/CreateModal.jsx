import React, { useState } from "react";
import CreatePostForm from "../form/CreatePostForm";

function CreateModal({ addBlog }) {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [date, setDate] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };
  async function handleNewBlog() {
    await addBlog({ title, content, date });
    toggleModal();
  }
  return (
    <>
      <button
        onClick={toggleModal}
        className="flex items-center text-white justify-center p-2 lg:text-3xl text-xl gap-3 bg-blue-800 lg:rounded-lg rounded-full"
      >
        <ion-icon name="create"></ion-icon>
        <p className="capitalize flex">Create Post</p>
      </button>

      {modal && (
        <div>
          <div className=" bg-black/75 top-0 left-0 right-0 bottom-0 z-10 fixed w-full h-full"></div>
          <div className="bg-white fixed top-0 right-0 w-80 z-20 h-screen p-5  rounded-tl-lg rounded-bl-lg">
            <div className="flex items-center w-full justify-between mb-16">
              <h1 className="capitalize font-bold text-blue-800">
                Create Post
              </h1>
              <button
                onClick={toggleModal}
                className="flex items-center text-black justify-center lg:text-5xl text-3xl gap-3 lg:rounded-lg rounded-full"
              >
                <ion-icon name="close"></ion-icon>
              </button>
            </div>

            <div>
              <CreatePostForm
                addBlog={handleNewBlog}
                title={title}
                content={content}
                date={date}
                setContent={setContent}
                setTitle={setTitle}
                setDate={setDate}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateModal;
