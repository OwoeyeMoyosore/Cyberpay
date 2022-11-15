import { Button } from "bootstrap";
import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Outlet } from "react-router-dom";
import CustomInput from "./customInput";
import "./layout/layout.css"

const CustomCard = ({title,src,href,children,text,link, labelName, labelClass, placeholder}) =>{
    
  return (
    <React.Fragment>
    <Card style={{ width: '20rem', borderRadius: "5px" }} className={"border-0"} >
      <Card.Img variant="top" src={src}></Card.Img>
      <Card.Body className={'pt-3'}>
        <Card.Title className={"fw-bold text-center"}>{title}</Card.Title>
       {/* {children} */}
       <Outlet />
         
        <Card.Link href={href}>{link}</Card.Link>
        
      </Card.Body>
      
    </Card>
    </React.Fragment>
  );
}



export default CustomCard