import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_DEV_URL,
    // baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Jobs", "Job", "Delete"],
  endpoints: (builder) => ({}),
});
export default apiSlice;
