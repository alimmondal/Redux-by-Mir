import { loadBlog } from "../../actionCreators/blogActions";

const loadBlogData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/blog-posts");
    const data = await res.json();
    if (data.data.length) {
      dispatch(loadBlog(data.data));
    }
  };
};
export default loadBlogData;
