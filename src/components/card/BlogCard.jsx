import React from "react";
import LOGO from "../../assets/blog.svg";
import EditPostModal from "../modal/EditPostModal";
import CardAvatar from "../avatar/CardAvatar";

function BlogCard() {
  return (
    <>
      <div className="lg:w-[300px] w-full h-[500px] flex flex-col rounded-tr-lg rounded-tl-lg shadow-md">
        <div className="bg-blue-800 w-[300px] h-[200px] flex items-center justify-center rounded-tr-lg rounded-tl-lg">
          <img src={LOGO} alt="" className="w-[300px] h-[200px]" />
        </div>

        <div className="w-[300px] h-[350px] p-2 gap-2 flex flex-col">
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold capitalize truncate">
              Crime spreads in lagos
            </h2>
            <h3 className="font-semibold capitalize truncate">Date</h3>
            <CardAvatar />
            <p className="text-justify h-24 text-gray-600 font-normal leading-6 tracking-tighter line-clamp-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              placeat unde assumenda vitae eos eligendi voluptate quo. In,
              quisquam a voluptates ad repellendus, aspernatur minus eligendi
              expedita ducimus explicabo ut?
            </p>
          </div>

          <div className="w-[280px] mt-1 flex items-center justify-between">
            <button className="font-bold px-2 py-3 text-blue-800 bg-transparent border-2 border-blue-800 rounded-lg">
              see more
            </button>
            <div className=" flex gap-4">
              <EditPostModal />
              <button className="rounded-lg px-2 py-3 flex justify-center items-center bg-red-600 text-white">
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
