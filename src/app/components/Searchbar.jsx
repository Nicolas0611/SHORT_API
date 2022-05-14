import React from "react";
import ResultCard from "./ResultCard";

const Searchbar = () => {
  return (
    <>
      <div className="searchbar">
        <div className=" searchbar-content">
          <input
            className="searchbar-input"
            type="text"
            placeholder="Shorten a link here"
          />
          <button className="searchbar-button">Shorten It!</button>
        </div>
      </div>
      <div className="searchbar-results">
        <div className="container">
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
        </div>
      </div>
    </>
  );
};

export default Searchbar;
