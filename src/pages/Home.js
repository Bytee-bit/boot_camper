import React from "react";
import Bootcamp from "../components/Home/Bootcamp";
import CardSectuion from "../components/Home/CardSectuion";
import Hero from "../components/Home/Hero";

function Home({ slides }) {
  return (
    <>
      <Hero />
      <CardSectuion />
      <Bootcamp slides={slides} />
    </>
  );
}

export default Home;
