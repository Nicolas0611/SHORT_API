import React from "react";
import Navbar from "../components/Navbar";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout_container">{children}</div>
      <div className="footer"></div>
    </div>
  );
};
export default Layout;
