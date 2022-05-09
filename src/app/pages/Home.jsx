import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
