import React from "react";
import brandRecognition from "../../assets/images/icon-brand-recognition.svg";

const Cards = ({ title, parragraph, img }) => {
  return (
    <div className="statisticsContainer">
      <div className="statisticsContainer-separator"></div>
      <div className="statistics-card">
        <div className="statistics-img">
          <img src={img} alt="Brand recognition " />
        </div>
        <div className="statistics-content">
          <h3 className="statistics-subtitle">{title}</h3>
          <p className="statistics-text">{parragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
