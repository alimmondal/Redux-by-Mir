import { loadBlog } from "../../actionCreators/blogActions";

const loadBlogDetail = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/blog-post/${id}`);
    const data = await res.json();
    if (data.data.length) {
      dispatch(loadBlog(data.data));
    }
  };
};
export default loadBlogDetail;
