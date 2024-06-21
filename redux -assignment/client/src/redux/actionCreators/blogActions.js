import {
  ADD_BLOG,
  BLOG_DETAIL,
  LOAD_BLOG,
  REMOVE_BLOG,
} from "../actionTypes/actionTypes";

export const loadBlog = (data) => {
  return {
    type: LOAD_BLOG,
    payload: data,
  };
};
export const addBlog = (data) => {
  return {
    type: ADD_BLOG,
    payload: data,
  };
};
export const removeBlog = (id) => {
  return {
    type: REMOVE_BLOG,
    payload: id,
  };
};
export const blogDetail = (id) => {
  return {
    type: BLOG_DETAIL,
    payload: id,
  };
};
