import React, { useEffect, useState } from "react";
import DisplayCard from "../../components/card/DisplayCard";
import axios from "axios";

function DisplayPage() {
  const [getBlogs, setGetBlogs] = useState([]);
  async function fetchUser() {
    try {
      let result = await axios.get("http://127.0.0.1:8000/api/allBlogs", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (result.data?.success) {
        const blogList = result.data?.data;
        setGetBlogs(blogList);
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
      <div className="w-full h-screen">
        <div className="flex h-full items-center justify-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
            {getBlogs?.map((blog, index) => {
              return <DisplayCard key={index} blog={blog} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayPage;
