import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "react-bootstrap";
import Scrollcomponent from "./Scrollcomponent";

function Cart() {
  // const { cartItems } = useContext(CartContext);
  let cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
  const [updatedCart, setUpdatedCart] = useState(cartItems);
  console.log(cartItems);

  const handleCartItem = (e) => {
    console.log(e.target.id);
    // const editedCart=JSON.parse(sessionStorage.getItem('cartItems'))
    cartItems.splice(e.target.id, 1);
    console.log(cartItems);
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
    setUpdatedCart(cartItems);
  };
  return (
    <>
      <Header />
      <div className="container">
        <h1>Cart</h1>
        {cartItems === null || updatedCart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div
            className="card d-flex flex-row flex-wrap justify-content-center pt-3"
            id="cart-list"
          >
            {updatedCart.map((item, index) => (
              <div className="cart-item products " key={item.id}>
                <h4>{item.title}</h4>
                <img src={item.image} alt={item.title} />
                <p className="mt-2">Price: ${item.price}</p>
                <Button
                  onClick={handleCartItem}
                  id={index}
                  className="btn-danger"
                >
                  Remove from Cart
                </Button>
                <Scrollcomponent />
              </div>
            ))}
          </div>
        )}
        <Link to="/checkout" className="btn btn-primary my-2">
          Proceed to Checkout
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
