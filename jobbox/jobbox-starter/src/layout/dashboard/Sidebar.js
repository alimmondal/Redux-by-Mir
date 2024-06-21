import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const {
    user: { role },
  } = useSelector((state) => state.auth);

  const employerRoutes = [
    {
      name: "Add job",
      path: "add-job",
    },
    {
      title: "Employer Profile",
      paths: "profile",
    },
    {
      editJobTitle: "Edit Job",
      editPaths: "editJob",
    },
    {
      AppliedTitle: "Applied Candidate",
      candidatePaths: "AppliedCandidate",
    },
  ];
  const candidateRoutes = [
    {
      name: "Applied job",
      path: "applied-jobs",
    },
    {
      title: "Candidate Profile",
      paths: "candidate",
    },
  ];

  return (
    <div className="bg-primary/10 col-span-2 h-screen sticky top-0">
      <div className="flex flex-col gap-2 w-full h-full  p-3">
        <div className="flex justify-between items-center text-primary my-1">
          <Link to="/" className="flex items-center">
            <FaChevronLeft />
            <h1>Back</h1>
          </Link>
          <h1 className="text-xl">Dashboard</h1>
        </div>
        {role === "employer" &&
          employerRoutes.map(
            ({
              name,
              path,
              title,
              paths,
              candidatePaths,
              AppliedTitle,
              editJobTitle,
              editPaths,
            }) => (
              <div key={name}>
                <Link
                  className="hover:bg-primary hover:text-white bg-primary/10 transition-all w-full block py-2 px-3 rounded-full"
                  to={path}
                >
                  {name}
                </Link>
                <Link
                  className="hover:bg-primary hover:text-white bg-primary/10 transition-all w-full block py-2 px-3 rounded-full"
                  to={paths}
                >
                  {title}
                </Link>
                <Link
                  className="hover:bg-primary hover:text-white bg-primary/10 transition-all w-full block py-2 px-3 rounded-full"
                  to={candidatePaths}
                >
                  {AppliedTitle}
                </Link>
                <Link
                  className="hover:bg-primary hover:text-white bg-primary/10 transition-all w-full block py-2 px-3 rounded-full"
                  to={editPaths}
                >
                  {editJobTitle}
                </Link>
              </div>
            )
          )}
        {role === "candidate" &&
          candidateRoutes.map(({ name, path, title, paths }) => (
            <div key={name}>
              <Link
                className="hover:bg-primary hover:text-white bg-primary/10 transition-all w-full block py-2 px-3 rounded-full"
                to={path}
              >
                {name}
              </Link>
              <Link
                className="hover:bg-primary hover:text-white bg-primary/10 transition-all w-full block py-2 px-3 rounded-full"
                to={paths}
              >
                {title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
