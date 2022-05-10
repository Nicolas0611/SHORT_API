import React from "react";

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
          <div className="searchbar-result">result 1</div>
          <div className="searchbar-result">result 2</div>
          <div className="searchbar-result">result 3</div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
