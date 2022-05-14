import React, { useState } from "react";

const ResultCard = () => {
  return (
    <div className="result">
      <div className="result-content">
        <a className="result-link">https://www.frontendmentor.io</a>
        <div className="result-response">
          <a className="result-shorten">https://rel.ink/k4lKyk</a>
          <button className="result-copy">Copy</button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
