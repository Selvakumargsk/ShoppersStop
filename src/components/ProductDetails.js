import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
    if (sessionStorage.getItem("cartItems") === null) {
      sessionStorage.setItem("cartItems", JSON.stringify([]));
      setCartItems(JSON.parse(sessionStorage.getItem("cartItems")));
      console.log(cartItems);
    }
    //  else {
    //   console.log(JSON.parse(sessionStorage.getItem("cartItems")));
    //   setCartItems(JSON.parse(sessionStorage.getItem("cartItems")));
    //   console.log(cartItems);
    // }
  }, [productId]);

  if (sessionStorage.getItem("cartItems") !== null) {
    console.log(JSON.parse(sessionStorage.getItem("cartItems")));
  }

  const handleAddToCart = (product, e) => {
    e.target.className = "btn btn-warning pointer";
    e.target.innerText = "Added";
    const updatedProduct = { ...product, quantity: 1 };
    // const Cart = JSON.parse(sessionStorage.getItem("cartItems"));
    setCartItems((prevCartItems) => [...prevCartItems, updatedProduct]);
    // console.log(Cart.push(updatedProduct));
    console.log(cartItems);
  };
  if (cartItems !== []) {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  if (!product) {
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
    <div className="pd">
      <Header />
      <div
        className="productDetails d-flex justify-content-center my-3 p-1 row"
        style={{ width: "100vw" }}
      >
        <div
          className="col-sm-7 d-flex flex-column align-items-center justify-content-between"
          style={{ textAlign: "left" }}
        >
          {" "}
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>Rating : {product.rating.rate}/5 </p>
          <p> Number of Stacks available : {product.rating.count}</p>
          <p>{product.description}</p>
          <div>
            <button
              className="btn btn-primary"
              onClick={(e) => handleAddToCart(product, e)}
            >
              Add to Cart
            </button>
            <button className="btn btn-success mx-2">Buy</button>
          </div>
        </div>
        <div className="col-sm-5">
          <img src={product.image} alt={product.title} />
        </div>
      </div>
      {/* Add more details of the product */}
      <Footer style={{ position: "fixed", bottom: 0 }} />
    </div>
  );
}

export default ProductDetails;
