import { useEffect, useState } from "react";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Categorise() {
  const navigate = useNavigate();
  const [categorisedData, setCategorisedData] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const categorisedProducts = JSON.parse(
        sessionStorage.getItem("categoryData")
      );
      setCategorisedData(categorisedProducts);
    }, 1000);
    if (sessionStorage.getItem("cartItems") === null) {
      sessionStorage.setItem("cartItems", JSON.stringify([]));
      setCartItems(JSON.parse(sessionStorage.getItem("cartItems")));
      console.log(cartItems);
    } else {
      setCartItems(JSON.parse(sessionStorage.getItem("cartItems")));
    }
  }, []);

  const handleAddToCart = (product, e) => {
    e.target.className = "btn btn-warning pointer";
    e.target.innerText = "Added";
    const updatedProduct = { ...product, quantity: 1 };
    setCartItems((prevCartItems) => [...prevCartItems, updatedProduct]);
    console.log(cartItems);
  };
  if (cartItems !== []) {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  // setCartItems(JSON.parse(sessionStorage.getItem("cartItems")));
  // const handleCart = (product) => {
  //   [...cartItems, product];
  //   console.log(cartItems);
  //   // sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  // };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  if (!categorisedData) {
    return (
      <div
        className="d-flex  flex-column-reverse justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div>Loading...</div>
        <div className="spinner-grow mt-2  justify-content-center"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container d-flex flex-wrap justify-content-center">
        {categorisedData.map((product) => (
          <>
            <div id={product.id} className="products">
              <h5>{product.title}</h5>
              <img
                src={product.image}
                alt={product.title}
                onClick={() => handleProductClick(product.id)}
              ></img>

              <p className="mt-2">
                <Button onClick={(e) => handleAddToCart(product, e)}>
                  Add to Cart
                </Button>
              </p>
            </div>
          </>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Categorise;
