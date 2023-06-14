import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BiUpArrowCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Scrollcomponent() {
  return (
    <>
      {/* <Header /> */}
      <a className="ScrolltoTop" href="#">
        <BiUpArrowCircle style={{ fontSize: "50px", color: "skyblue" }} />
      </a>
      {/* <Footer /> */}
    </>
  );
}

export default Scrollcomponent;
