import React from "react";
import Awards from "./awards/Awards";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";

import Price from "./price/Price";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />

      <Awards />

      <Price />
    </>
  );
};

export default Home;
