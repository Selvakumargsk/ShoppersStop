import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Scrollcomponent from "./Scrollcomponent";

function Homelayout() {
  return (
    <>
      <Header />
      <Scrollcomponent />
      <Home />
      <Footer />
    </>
  );
}

export default Homelayout;
