import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Searchbar from "../components/Searchbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <main className="home">
        <section className="hero">
          <Hero />
        </section>
        <section className="search">
          <Searchbar />
        </section>
      </main>
    </>
  );
};

export default Home;
