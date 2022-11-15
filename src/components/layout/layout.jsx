import React from "react";
import { Container, Button, Stack, Row,Col } from "react-bootstrap";
import { authRoutes, route } from "../../utilities/routes";
import IMAGES from "../../assets/imgs/IMAGES";
import "./layout.css";
import CustomCard from "../customCard";
import CustomNav from "../customNav";
import CustomSidebar from "../customSidebar";
import { useSelector } from "react-redux";


const Layout = ({ children, buttonName }) => {

    const title = useSelector((state)=> state.layout.title)

  // const customCardButton=() => {
  //     const pathname = window.location.pathname
  //     if(pathname === route.login){
  //         return 'Sign In'
  //     }
  // }
  if (authRoutes.indexOf(window.location.pathname) === -1) {
    return (
      <React.Fragment>
        <Container fluid as={"section"} className={"m-0 px-0 layout"}>
          <CustomNav />
          <CustomSidebar/>

        </Container>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Container
        fluid
        as={"section"}
        className={" layout"}
        lg={12}
        md={6}
        sm={12}
      >
        <div className="logo text-center">
          <img src={IMAGES.logo} alt="Logo" />
        </div>
        <div className={"children mt-4"}>
          <CustomCard title={title}>{children}</CustomCard>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
