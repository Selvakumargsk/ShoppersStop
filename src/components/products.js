import React, { useState, useEffect, useContext, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { CartContext } from "./CartContext";
import Scrollcomponent from "./Scrollcomponent";
import {MyContext} from "../App"

function Products() {
  const [products, setProducts] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const {cartObj ,updateCart}=useContext(MyContext);
  // updateCart("hi")
  // console.log(cartObj);
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
    if (sessionStorage.getItem("cartItems") === null) {
      sessionStorage.setItem("cartItems", JSON.stringify([]));
      setCartItems(JSON.parse(sessionStorage.getItem("cartItems")));
      console.log(cartItems);
    } else {
      setCartItems(JSON.parse(sessionStorage.getItem("cartItems")));
    }
  }, []);

  const addContext = (x) => {
    updateCart(x);
    console.log(cartObj);
  };

  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");
  const navigate = useNavigate();
  // const { addToCart } = useContext(CartContext);

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };


  if (!products) {
    return (
      <>
        <div
          className="d-flex  flex-column-reverse justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div>Products Loading...</div>
          <div className="spinner-border"></div>
        </div>
      </>
    );
  }

  const handleAddToCart = (product, e) => {
    addContext(product)
    e.target.className = "btn btn-warning pointer";
    e.target.innerText = "Added";
    const updatedProduct = { ...product, quantity: 1 };
    setCartItems((prevCartItems) => [...prevCartItems, updatedProduct]);
    // console.log(cartItems);
  };
  if (cartItems !== []) {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  return (
    <>
      <Scrollcomponent />
      <div className="container ">
        <h1>Product list</h1>
        <div className="card" id="list">
          {products
            .filter((product) =>
              searchQuery
                ? product.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                : true
            )
            .map((product) => (
              <div className="products" key={product.id}>
                <h5>{product.title}</h5>
                <img
                  onClick={() => handleProductClick(product.id)}
                  src={product.image}
                  alt={product.title}
                />
                <p className="mt-2">Price: ${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={(e) => handleAddToCart(product, e)}
                >
                  Add to Cart
                </button>
                <button className="btn btn-success mx-2">Buy</button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Products;
