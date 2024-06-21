import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div className="">
      <div
        className="w-72 h-120 shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative"
        key={blog._id}
      >
        <div className="grid place-items-center bg-indigo-900 text-white w-20 h-8 rounded-full absolute top-2 right-2">
          <p>{blog.category}</p>
        </div>

        <div className="h-52 w-52 mx-auto">
          <img src={blog.image} alt={blog._id} />
        </div>
        <h1 className="font-bold text-center">{blog.title}</h1>

        <div className="flex-1">
          <p>{blog.desc}</p>
        </div>
        <div className="flex gap-2 mt-5">
          <button
            title="Read more"
            className="bg-blue-500 rounded-full py-1 px-4 flex justify-center items-center text-white text-bold"
            // onClick={() => dispatch((blog))}
          >
            <p>Read more...</p>
            {/* <RiDeleteBin2Line className="text-white" /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
