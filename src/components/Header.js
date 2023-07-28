import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,NavDropdown 
} from "react-bootstrap";
import { FaOpencart } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

function Header(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/products?search=${searchQuery}`);
  };


  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand className="p-3">
            Shopper's <span style={{ color: "yellow" }}>Stop</span>{" "}
            <FaOpencart style={{ fontSize: "30px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse>
            <Nav className="ms-auto my-2 my-lg-0" navbarNav>
              <Form className="d-flex form">
                <FormControl
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  style={{ position: "relative" }}
                  onChange={(e) => setSearchQuery(e.target.value)}
                ></FormControl>
                <FiSearch className="searchIcon" onClick={handleSearch} />
               { props.button? 
                <NavDropdown title={props.user.toUpperCase()}>
                  <NavDropdown.Item>{props.user} account</NavDropdown.Item>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                  <NavDropdown.Item onClick={()=>{const confirm=window.confirm("Do you want to logout"); if(confirm){props.setButton(false)}}}>Logout</NavDropdown.Item>
                </NavDropdown>:<Button className="btn-light" onClick={()=>props.setLogin(true)}>
                  Login
                </Button>}
              </Form>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
              <NavLink className="nav-link" to="/Cart">
                <BsCartCheckFill
                  style={{
                    fontSize: "20px",
                    borderBottom: "1px solid transparent",
                  }}
                />
                Cart
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
