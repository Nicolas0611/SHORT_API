import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Searchbar from "../components/Searchbar";
import Cards from "../components/Cards";
import Layout from "../layout/Layout";
import { cardContent } from "../libraries/data";

const Home = () => {
  return (
    <Layout>
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
        <section className="getStarted">
          <h2 className="getStarted_title">Boost your links today</h2>
          <div className="button ">
            <a className="navbar-link" href="">
              Get Started
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
