import React from "react";
import LOGO from "../../assets/blog.svg";
import EditPostModal from "../modal/EditPostModal";
import axios from "axios";
import { authToken } from "../../store/auth";

function BlogCard(props) {
  const { blog } = props;
  async function deleteBlog() {
    try {
      let result = await axios.post(
        "http://127.0.0.1:8000/api/deleteBlog",
        {
          id: blog?.id
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
      <div className="lg:w-[300px] w-full h-[500px] flex flex-col rounded-lg shadow-md">
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

          <div className="w-[280px] mt-1 flex items-center justify-between">
            <button className="font-bold px-2 py-3 text-blue-800 bg-transparent border-2 border-blue-800 rounded-lg">
              see more
            </button>
            <div className=" flex gap-4">
              <EditPostModal blog={blog} />
              <button
                onClick={deleteBlog}
                className="rounded-lg px-2 py-3 flex justify-center items-center bg-red-600 text-white"
              >
                <ion-icon name="trash"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
