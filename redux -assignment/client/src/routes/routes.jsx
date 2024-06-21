import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddBlog from "../pages/Dashboard/AddBlog";
import BlogList from "../pages/Dashboard/BlogList";
import Dashboard from "../pages/Dashboard/Dashboard";
import About from "../pages/Main/About";
import Home from "../pages/Main/Home";
import TopRated from "../pages/Main/TopRated";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <BlogList />,
          },
          {
            path: "add-blog",
            element: <AddBlog />,
          },
        ],
      },
    ],
  },
]);

export default routes;
