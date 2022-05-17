import React, { useEffect } from "react";
import ResultCard from "./ResultCard";
import { useDispatch, useSelector } from "react-redux";
import { shortAction } from "../redux/actions/pageActions";
import { useState } from "react";

const Searchbar = () => {
  const dispatch = useDispatch();
  const links = useSelector((state) => state.shortenlink);
  const [text, setText] = useState("");

  const handleRequest = (e) => {
    e.preventDefault();
    dispatch(shortAction(text));
    setText("");
  };

  useEffect(() => {
    console.log(links);
  }, [links]);

  const handleText = (value) => {
    setText(value);
  };
  return (
    <>
      <div className="searchbar">
        <div className=" searchbar-content">
          <input
            className="searchbar-input"
            type="text"
            placeholder="Shorten a link here"
            value={text}
            onChange={(e) => handleText(e.target.value)}
          />
          <button className="searchbar-button" onClick={handleRequest}>
            Shorten It!
          </button>
        </div>
      </div>
      <div className="searchbar-results">
        <div className="container">
          {links &&
            links.map((link, index) => <ResultCard key={index} {...link} />)}
        </div>
      </div>
    </>
  );
};

export default Searchbar;
