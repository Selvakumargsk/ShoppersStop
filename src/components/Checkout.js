import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "react-bootstrap";
import { MDBTable } from "mdb-react-ui-kit";
import { MDBDataTable } from "mdbreact";
import { useState } from "react";

function Checkout() {
  const cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
  // const countfunction =()=>{
  //   const [count , setCount]=useState(cartItems.map((val, index)=>val.quantity))
  // };

  const data = {
    columns: [
      {
        label: "Product Image",
        field: "image",
      },
      {
        label: "Product Name",
        field: "product",
      },
      {
        label: "Product Price ",
        field: "price",
      },
      {
        label: "Product Quantity",
        field: "quantity",
      },
      {
        label: "Total price",
        field: "total",
      },
    ],
    rows: cartItems.map((val, index) => {
      // const [count , setCount]=useState(val.quantity)
      // console.log(count);
      return {
        image: (
          <img style={{ width: "50px", height: "40px" }} src={val.image}></img>
        ),
        product: val.title,
        price: val.price,
        quantity: (
          <>
            {" "}
            <Button 
              className="btn-light"
              onClick={(e) => {
                let minus = e.target.nextSibling.nextElementSibling.innerText;
                e.target.nextSibling.nextElementSibling.innerText =
                  parseInt(minus) - 1;
                document.getElementsByClassName("total")[index].innerText =
                  parseInt(document.getElementById(index)?.innerText) *
                  val.price;
                // cartItems[e.target.id].quantity =cartItems[e.target.id].quantity-1;
                // console.log(cartItems[e.target.id]);
                }}
            >
              -
            </Button>{" "}
            <span id={index}> {val.quantity} </span>{" "}
            <Button
              className="btn-light"
              onClick={(e) => {
                let plus =
                  e.target.previousSibling.previousElementSibling.innerText;
                e.target.previousSibling.previousElementSibling.innerText =
                  parseInt(plus) + 1;
                document.getElementsByClassName("total")[index].innerText =
                  parseInt(document.getElementById(index)?.innerText) *
                  val.price;
                // cartItems[e.target.id].quantity =cartItems[e.target.id].quantity+1;
                // console.log(cartItems[e.target.id]);
              }}
            >
              +
            </Button>
          </>
        ),
        total: <span className="total">{val.price}</span>,
      };
    }),
  };
  return (
    <>
      <Header />
      <div className="container checkout">
        <MDBDataTable striped data={data} />
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
