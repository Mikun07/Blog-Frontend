import axios from "axios";
import React, { useState } from "react";
import { authToken } from "../../store/auth";

function CreatePostForm() {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [date, setDate] = useState(null);

  async function addBlog() {
    try {
      let result = await axios.post(
        "http://127.0.0.1:8000/api/addBlog",
        {
          title,
          content,
          date,
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
        // const blogList = result.data?.data;
        // setUserBlogs(blogList);
        alert("Successfully created blog")
      } else {
        alert('Unable to create blog')
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
          addBlog();
        }}
        className="flex flex-col gap-y-10"
      >
        <div className="grid grid-cols-2 items-center">
          <label htmlFor="" className=" font-medium">
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
          />
        </div>

        <div className="grid grid-cols-2 items-center">
          <label htmlFor="" className=" font-medium">
            Content:
          </label>
          <textarea
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
          />
        </div>

        <div className="grid grid-cols-2 items-center">
          <label htmlFor="" className=" font-medium">
            Date:
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="ring-2 active:ring-blue-800 rounded px-2 py-1 text-black"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="cursor-pointer text-white bg-blue-800 rounded-md px-4 py-2 capitalize text-xl font-bold hover:scale-105 duration-200"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default CreatePostForm;
