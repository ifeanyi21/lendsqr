import React from "react";
import SideBar from "../components/SideBar/SideBar";
import NavbarCanvas from "./NavbarCanvas";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarCanvas/>
      <div className="row">
        <div
          className="col-lg-2 bg-white hideNav"
          style={{ boxShadow: "0px 5px 20px 0px #0000000A", paddingRight:0 }}
        >
          <SideBar />
        </div>
        <div className="col-lg-10 fillScreen" style={{ backgroundColor: "#E5E5E5", padding:60 }}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
