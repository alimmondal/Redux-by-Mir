import {
  ADD_BLOG,
  BLOG_DETAIL,
  LOAD_BLOG,
  REMOVE_BLOG,
} from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
  blogs: [],
};
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOG:
      return {
        ...state,
        blogs: action.payload,
      };
    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case BLOG_DETAIL:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case REMOVE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };

    default:
      return state;
  }
};

export default blogReducer;
