import React from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import IMAGES from "../assets/imgs/IMAGES";

const CustomNav = () => {
  return (
    <React.Fragment>
      {/* <div className="d-flex flex-row justify-content-between"> */}
        
          <Navbar bg="light" expand="lg">
            <Container fluid className={"px-0 ms-5 me-5"}>
              <Navbar.Brand href="#home">
                <img src={IMAGES.logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav justify-content-end">
                <Nav className="me-auto">
                  <Nav.Link href="#home" className={""}>
                    Settlement Automation
                  </Nav.Link>
                  <Nav.Link href="#home">-Here's what's happening</Nav.Link>
                </Nav>

                <Form className="d-flex ">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button className="btn bg-light text-dark end-0">
                    Enter
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        
       
        
    </React.Fragment>
  );
};

export default CustomNav;
