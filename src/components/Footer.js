import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

export default function Footer(props) {
  const navToRegister = () => {
    props.setSignup(true)
    };
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#0a4275" }}
    >
      <MDBContainer className="p-4 pb-0">
        <section className="">
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">Register for free</span>
            <Button
              type="button"
              outline
              color="light"
              onClick={navToRegister}
              rounded
            >
              Sign up!
            </Button>
          </p>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-white" href="http://pcstech.in/">
          pcstech.in
        </a>
      </div>
    </MDBFooter>
  );
}
