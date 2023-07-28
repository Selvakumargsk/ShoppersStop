import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";
import img1 from "../carousel/pexels-fox-214659.jpg";
import img2 from "../carousel/pexels-karol-d-325153.jpg";
import img3 from "../carousel/pexels-pixabay-355948.jpg";
import img4 from "../carousel/pexels-suzy-hazelwood-1122865.jpg";
import img5 from "../carousel/pexels-tim-mossholder-942317.jpg";
import img6 from "../carousel/pexels-vlada-karpovich-4050334.jpg";
import data from "../api";

function Home() {
  const Navigate = useNavigate();

  const click = async (category) => {
    // sessionStorage.setItem("categoryData", JSON.stringify([]));
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        const x = res.filter((obj) => obj.category === category);
        sessionStorage.setItem("categoryData", JSON.stringify(x));
      });
    Navigate(`/Category/${category}`);
  };

  return (
    <div>
      <div className="banner">
        <h1>Shopper's Stop</h1>
        <div className="banner-content">
          <p>Discover the Latest Trends</p>
          <p>Shop Now for Fashion, Electronics & More</p>
          <p>Get Exclusive Deals and Discounts</p>
          <p
            className="button"
            onClick={() => {
              Navigate("/products");
            }}
          >
            Shop here
          </p>
        </div>
      </div>
      <h2 className="homeHeadings">CATEGORIES</h2>
      <div className="container d-flex flex-row flex-wrap justify-content-center">
        {data.map((product) => (
          <div
            className="categories "
            id={product.category}
            onClick={(e) => {
              click(e.target.id);
            }}
            key={product.id}
          >
            <h5
              style={{ fontSize: "2vw" }}
              id={product.category}
              onClick={(e) => {
                click(e.target.id);
              }}
            >
              {product.category.toUpperCase()}
            </h5>
            <img
              src={product.image}
              alt={product.id}
              id={product.category}
              onClick={(e) => {
                click(e.target.id);
              }}
            ></img>
          </div>
        ))}
      </div>
      <h2 className="homeHeadings">Check Offers</h2>
      <div className=" container-fluid">
        <div className="row">
          <div className="col-sm-6 banner1 d-flex flex-column justify-content-between">
            <div>
              <h2
                style={{
                  color: "white",
                  fontSize: "4vw",
                  fontFamily: "math",
                }}
                className="mt-2"
              >
                FASHION TOP DEALS
              </h2>
              <p
                style={{
                  color: "white",
                  fontSize: "1.5vw",
                  fontFamily: "math",
                }}
              >
                Limited time offer , upto 50% off on costumes
              </p>
            </div>
            <Button
              onClick={() => Navigate("/Scroll")}
              className="mb-2 align-self-center"
            >
              View All Offers
            </Button>
          </div>
          <div className="col-sm-6 banner2 d-flex flex-column flex-wrap align-items-baseline justify-content-between">
            <div className="d-flex flex-column">
              <h2
                style={{
                  color: "midnightblue",
                  fontSize: "3vw",
                  fontFamily: "math",
                }}
                className="mt-2 align-self-start"
              >
                Summer Flash Sales
              </h2>
              <p>Explore uncountable summer offers</p>
              <p>Enjoy your weekend with unlimited weekend Offers</p>
            </div>
            <Button
              className="mb-2 align-self-center btn-warning"
              style={{ color: "navy", fontSize: "20px" }}
            >
              Flash Sale
            </Button>
          </div>
        </div>
      </div>
      <Carousel interval={2000}>
        <Carousel.Item>
          <img className="carousel-image" src={img1} alt="img1" />
          <Carousel.Caption>
            <h2>Books</h2>
            <p> Buy Books of famous authors </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={img2} alt="img2" />
          <Carousel.Caption>
            <h2>Gadgets and Electronics</h2>
            <p>
              Endless of Gadgets and Electronics Available in Shopper's Stop
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={img3} alt="img3" />
          <Carousel.Caption>
            <h2>Become an Infopreneur</h2>
            <p>
              Get Collaborate with Shopper's Stop Platform and Propogate your
              Idea to the World
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={img4} alt="img4" />
          <Carousel.Caption>
            <h2>Start Publishing</h2>
            <p>Become Author and Start Writing and Publish your own Books</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={img5} alt="img5" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={img6} alt="img6" />
          <Carousel.Caption>
            <h2>Shop at anywhere</h2>
            <p>
              With our delivery partners we have global connectivity, so we are
              waiting serve best to fulfill your shopping{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
