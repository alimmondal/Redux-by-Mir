import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetJobByIdQuery } from "../../feature/job/jobApi";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  // console.log(user);

  const {
    firstName,
    lastName,
    country,
    email,
    companyName,
    roleInCompany,
    companyCategory,
  } = user;
  return (
    <div>
      <h1>Employer profile:</h1>
      <h1>
        Name: {firstName} {lastName}
      </h1>
      <h1>Email: {email}</h1>
      <h1>Company Name: {companyName}</h1>
      <h1>Company Category: {companyCategory}</h1>
      <h1>Role In Company: {roleInCompany}</h1>
      <h1>Country: {country}</h1>
    </div>
  );
}

export default Profile;
