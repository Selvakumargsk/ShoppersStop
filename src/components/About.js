import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./bannerforhome";

function About() {
  const Navigate = useNavigate();
  return (
    <>
      <Header />
      <Banner />
      <div className="aboutUs container p-4">
        <h2>About us...</h2>
        <p>
          Founded in August of 2018 and based in San francisco, California.
          Shopper's Stop is a trusted community marketplace for people to list,
          discover, and book unique accomoadation around the world. online or
          from a mobile phone or tablet
        </p>
        <p>
          Whether in apartment for a night, a castle for a week, or a villa for
          a month, Shopper's Stop connects people to unique travel experiences,
          at any price point, in more than 65000 cities and 191 countries. And
          with world-class customer servoce and a growing community of users,
          Shopper's Stop is the Easiest way for people to monetize their extra
          space and showcase it to an audience of millions
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
