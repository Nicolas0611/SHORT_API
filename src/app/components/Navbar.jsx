import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import burguer from "../../assets/images/burguer-menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { clickAction } from "../redux/actions/pageActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const click = useSelector((state) => state.click);
  const changeClick = () => {
    dispatch(clickAction(!click));
  };
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setWindowWidth(window.innerWidth);
  };
  return (
    <div className="navbar container">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-content">
        <div onClick={changeClick} className="navbar-menu">
          <img src={burguer} alt="burguer-menu" />
        </div>
        {click || width > 768 ? (
          <div className="navbar-links">
            <a className="navbar-link">Features</a>
            <a className="navbar-link">Pricing</a>
            <a className="navbar-link">Resources</a>
            <div className="navbar-buttons">
              <a className="navbar-link">Login</a>
              <div className="button">
                <a className="navbar-link" href="">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
