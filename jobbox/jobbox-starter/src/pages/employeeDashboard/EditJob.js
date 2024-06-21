import React from "react";
import JobCard from "../../components/reusable/JobCard";
import { useGetJobsQuery } from "../../feature/job/jobApi";

function EditJob() {
  const { data, isLoading, isError } = useGetJobsQuery();

  return (
    <div className="pt-14">
      <div className="bg-primary/10 p-5 rounded-2xl">
        <h1 className="font-semibold text-xl">Edit Jobs</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5 mx-20">
        {data?.data?.map((jobData) => (
          <JobCard jobData={jobData} />
        ))}
      </div>
    </div>
  );
}

export default EditJob;
