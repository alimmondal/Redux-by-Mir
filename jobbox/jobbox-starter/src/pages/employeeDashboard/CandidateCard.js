import React from "react";

function CandidateCard({ candidateData }) {
  console.log(candidateData);
  const { applicants } = candidateData || {};
  //   console.log(applicants);
  return (
    <div className="border border-gray-300 shadow-xl p-5 rounded-2xl text-primary">
      <div className=" text-primary">
        {applicants?.map((item) => (
          <ul>
            <li className="">id: {item.id}</li>
            <small className="text-primary/70 ">
              Email:
              <li className="font-semibold hover:text-primary cursor-pointer hover:underline transition-all">
                {item.email}
              </li>
              <li>Name: {item.name}</li>
              <li>Country: {item.country}</li>
              <hr className="py-3" />
            </small>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default CandidateCard;
