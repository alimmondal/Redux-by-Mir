import React from "react";
import { useGetJobsQuery } from "../../feature/job/jobApi";
import CandidateCard from "./CandidateCard";

function AppliedCandidate() {
  const { data, isLoading, isError } = useGetJobsQuery();
  // console.log(data);

  return (
    <div className="pt-14">
      <div className="bg-primary/10 p-5 rounded-2xl">
        <h1 className="font-semibold text-xl">Applied Candidates</h1>
      </div>
      <div className="mt-5 mx-20">
        {data?.data?.map((candidateData) => (
          <CandidateCard
            key={candidateData._id}
            candidateData={candidateData}
          />
        ))}
      </div>
    </div>
  );
}

export default AppliedCandidate;
