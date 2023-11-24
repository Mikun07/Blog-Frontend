import React, { useEffect, useState } from "react";
import CreateModal from "../../components/modal/CreateModal";
import BlogCard from "../../components/card/BlogCard";
import { authToken } from "../../store/auth";
import axios from "axios";
function ManageBlog() {
  const [userBlogs, setUserBlogs] = useState([]);
  async function fetchUser() {
    try {
      let result = await axios.get("http://127.0.0.1:8000/api/listBlogs", {
        headers: {
          Authorization: authToken,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (result.data?.success) {
        const blogList = result.data?.data;
        setUserBlogs(blogList);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  useEffect(() => {
    fetchUser();
  }, []);
  
  return (
    <>
      <div className="flex flex-col justify-between mx-1">
        <div className="flex flex-col w-full h-[90%] items-center justify-between">
          <div className=" flex justify-center w-full mb-5">
            <h1 className="font-bold capitalize text-blue-800">Manage Post</h1>
          </div>

          <div className=" flex w-full gap-3 items-center justify-start">
            <CreateModal />
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
