import axios from "axios";
import React, { useState } from "react";
import { authToken } from "../../store/auth";
import { BASE_URL } from "../../config/api";

function EditPostForm({ blog }) {
  const [newTitle, setNewTitle] = useState(blog?.title);
  const [newContent, setNewContent] = useState(blog?.content);
  const [newDate, setNewDate] = useState(blog?.date);
  async function editBlog() {
    try {
      let result = await axios.put(
        `${BASE_URL}/api/editBlog`,
        {
          id: blog?.id,
          title: newTitle,
          content: newContent,
          date: newDate,
        },
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      if (result.data?.success) {
        alert("Successfully edited blog");
      } else {
        alert("Unable to edit blog");
      }
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editBlog();
        }}
        className="flex flex-col gap-y-10"
      >
        <div className="grid grid-cols-2 items-center">
          <label htmlFor="" className=" font-medium">
            Title:
          </label>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
          />
        </div>

        <div className="grid grid-cols-2 items-center">
          <label htmlFor="" className=" font-medium">
            Content:
          </label>
          <textarea
            type="text"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
          />
        </div>

        <div className="grid grid-cols-2 items-center">
          <label htmlFor="" className=" font-medium">
            Date:
          </label>
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="cursor-pointer text-white bg-blue-800 rounded-md px-4 py-2 capitalize text-xl font-bold hover:scale-105 duration-200"
          >
            Edit Post
          </button>
        </div>
      </form>
    </>
  );
}

export default EditPostForm;
