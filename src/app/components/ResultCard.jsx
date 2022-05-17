import React, { useState } from "react";

const ResultCard = (props) => {
  return (
    <div className="result">
      <div className="result-content">
        <a className="result-link">{props.original}</a>
        <div className="result-response">
          <a className="result-shorten">{props.short_link}</a>
          <button className="result-copy">Copy</button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
