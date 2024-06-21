import React from "react";
import { useSelector } from "react-redux";

const CandidateDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const { firstName, lastName, country, email, city, address, postcode } = user;
  return (
    <div>
      <h1>Candidate profile:</h1>
      <h1>
        Name: {firstName} {lastName}
      </h1>
      <h1>Email: {email}</h1>
      <h1>City Name: {city}</h1>
      <h1>Full address: {address}</h1>
      <h1>Postcode: {postcode}</h1>
      <h1>Country: {country}</h1>
    </div>
  );
};

export default CandidateDashboard;
