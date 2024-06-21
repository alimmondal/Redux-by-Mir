import { addBlog } from "../../actionCreators/blogActions";

const addBlogData = (blogPost) => {
  return async (dispatch, getSate) => {
    const res = await fetch("http://localhost:5000/blog-post", {
      method: "POST",
      body: JSON.stringify(blogPost),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();
    if (data.acknowledged) {
      dispatch(
        addBlog({
          _id: data.insertedId,
          ...blogPost,
        })
      );
    }
  };
};
export default addBlogData;
