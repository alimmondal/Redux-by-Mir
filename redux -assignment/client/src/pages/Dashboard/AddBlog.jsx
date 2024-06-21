import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addBlogData from "../../redux/thunk/blogs/addBlogData";

const AddBlog = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    const blogPost = {
      title: data.title,
      category: data.category,
      status: data.status === "true" ? true : false,
      desc: data.desc,
      image: data.image,
      detailDesc: data.detailDesc,
    };

    console.log(blogPost);
    dispatch(addBlogData(blogPost));
  };

  return (
    <div className="flex justify-center items-center h-full ">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="title">
            Title
          </label>
          <input type="text" id="title" {...register("title")} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="image">
            Image
          </label>
          <input type="text" name="image" id="image" {...register("image")} />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3" htmlFor="category">
            Category
          </label>
          <select name="category" id="category" {...register("category")}>
            <option value="world">world</option>
            <option value="country">country</option>
            <option value="sports">sports</option>
            <option value="tech">tech</option>
          </select>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="desc">
            Short Description
          </label>
          <input type="text" name="desc" id="desc" {...register("desc")} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="detailDesc">
            Detail Description
          </label>
          <input
            type="text"
            name="detailDesc"
            id="detailDesc"
            {...register("detailDesc")}
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <button
            className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
