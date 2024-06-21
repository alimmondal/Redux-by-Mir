import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import AppliedJobs from "../pages/candidateDashboard/AppliedJobs";
import CandidateDashboard from "../pages/candidateDashboard/CandidateDashboard";
import AddJob from "../pages/employeeDashboard/AddJob";
import AppliedCandidate from "../pages/employeeDashboard/AppliedCandidate";
import EditJob from "../pages/employeeDashboard/EditJob";
import Profile from "../pages/employeeDashboard/Profile";
import UpdateJob from "../pages/employeeDashboard/UpdateJob";
import Home from "../pages/home/Home";
import JobDetails from "../pages/JobDetails";
import Jobs from "../pages/Jobs";
import Login from "../pages/Login";
import AccountCreator from "../pages/register/AccountCreator";
import Signup from "../pages/Signup";
import PrivateRoute from "../utils/PrivateRoute";

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
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/update-job/:id",
        element: <UpdateJob />,
      },
      {
        path: "/register",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
      {
        path: "/register/:type",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "add-job",
        element: <AddJob />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "editJob",
        element: <EditJob />,
      },
      // {
      //   path: "/update-job/:id",
      //   element: <UpdateJob />,
      // },
      {
        path: "AppliedCandidate",
        element: <AppliedCandidate />,
      },
      {
        path: "candidate",
        element: <CandidateDashboard />,
      },
    ],
  },
]);

export default routes;
