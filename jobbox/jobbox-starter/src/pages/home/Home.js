import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/reusable/Loading";
import Landing from "./Landing";

const Home = () => {
  const { isLoading } = useSelector((state) => state.auth);
  if (isLoading) {
    return <Loading />;
  }
  return <Landing />;
};

export default Home;
