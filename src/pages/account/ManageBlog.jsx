import React from "react";
import CreateModal from "../../components/modal/CreateModal";
import BlogCard from "../../components/card/BlogCard";

function ManageBlog() {
  return (
    <>
      <div className="flex flex-col justify-between mx-1">
        <div className="flex flex-col w-full h-[90%] items-center justify-between">
          <div className=" flex justify-center w-full mb-5">
            <h1 className="font-bold capitalize text-blue-800">Manage Post</h1>
          </div>

          <div className=" flex w-full gap-3 items-center justify-start">
            <CreateModal />
            <h3 className="font-semibold capitalize lg:hidden flex">create post</h3>
          </div>

          <div className="flex justify-center w-full h-[90%] overflow-y-auto my-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
              <BlogCard />

              <BlogCard />

              <BlogCard />

              <BlogCard />

              <BlogCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageBlog;
