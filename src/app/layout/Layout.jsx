import React from "react";
import Navbar from "../components/Navbar";
import logo from "../../assets/images/logo.svg";
import { Icons } from "../libraries/data";
import { footerContent } from "../libraries/data";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout_container">{children}</div>
      <div className="footer">
        <div className="footer-img">
          <img className="footer-imgFooter" src={logo} alt="logo" />
        </div>
        <div className="footer-content">
          {footerContent.map((content, index) => (
            <ul className="footer-links" key={index}>
              <li className="footer-title">{content.title}</li>
              <li className="footer-link">{content.link1}</li>
              <li className="footer-link">{content.link2}</li>
              <li className="footer-link">{content.link3}</li>
            </ul>
          ))}
          <div className="footer-socials">
            <div className="footer-icons">
              <img src={Icons.tw} alt="twitter" />
              <img src={Icons.pt} alt="pinterest" />
              <img src={Icons.ig} alt="instagram" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
