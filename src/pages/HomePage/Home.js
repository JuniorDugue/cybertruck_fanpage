import React from "react";
import { homeObjOne } from "./Data";
import { HomeArea } from "../../components";

const Home = () => {
  return (
    <>
      <HomeArea {...homeObjOne} />
    </>
  );
};

export default Home;
