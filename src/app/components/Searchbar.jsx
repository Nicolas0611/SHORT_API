import React from "react";
import ResultCard from "./ResultCard";
import { useDispatch, useSelector } from "react-redux";
import { shortAction } from "../redux/actions/pageActions";
import { useState } from "react";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleRequest = (e) => {
    e.preventDefault();
    dispatch(shortAction(text, setList, list));
  };
  console.log(list);
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
            onChange={(e) => handleText(e.target.value)}
          />
          <button className="searchbar-button" onClick={handleRequest}>
            Shorten It!
          </button>
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
