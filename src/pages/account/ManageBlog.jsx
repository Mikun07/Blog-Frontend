import React, { useEffect, useState } from "react";
import CreateModal from "../../components/modal/CreateModal";
import BlogCard from "../../components/card/BlogCard";
import { authToken } from "../../store/auth";
import axios from "axios";
import { BASE_URL } from "../../config/api";
function ManageBlog() {
  const [userBlogs, setUserBlogs] = useState([]);
  async function fetchBlogs() {
    try {
      let result = await axios.get(`${BASE_URL}/api/listBlogs`, {
        headers: {
          Authorization: authToken,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (result.data?.success) {
        const blogList = result.data?.data;
        const reversedBlogs = blogList?.reverse()
        setUserBlogs(reversedBlogs);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function addBlog({ title, content, date }) {
    try {
      let result = await axios.post(
        `${BASE_URL}/api/addBlog`,
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
        alert("Successfully created blog");
      } else {
        alert("Unable to create blog");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="flex flex-col h-full justify-between mx-1">
        <div className="flex flex-col w-full h-[90%] items-center justify-between">
          <div className=" flex justify-center w-full mb-5">
            <h1 className="font-bold capitalize text-blue-800">Manage Post</h1>
          </div>

          <div className=" flex w-full gap-3 items-center justify-start">
            <CreateModal addBlog={addBlog} />
          </div>

          <div className="flex justify-center w-full h-[90%] overflow-y-auto my-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
              {userBlogs?.map((blog, index) => {
                return <BlogCard key={index} blog={blog} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageBlog;
