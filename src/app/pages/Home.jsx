import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Searchbar from "../components/Searchbar";
import Cards from "../components/Cards";
import { cardContent } from "../libraries/data";

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
        <section className="statistics container">
          <h2 className="statistics-title"> Advanced Statistics</h2>
          <p className="statistics-parragraph">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <div className="statistics-containerCards">
            {cardContent.map((card, index) => (
              <Cards
                key={index}
                title={card.title}
                parragraph={card.parragraph}
                img={card.img}
              />
            ))}
          </div>
        </section>
        <section className="getStarted"></section>
      </main>
    </>
  );
};

export default Home;
