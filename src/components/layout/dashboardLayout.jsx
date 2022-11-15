import React from "react";
import { Container, Row, Col, Navbar, Card, Stack, Button, Form } from "react-bootstrap";
import { boardRoutes, route } from "../../utilities/routes";
// import '../../styles/DashboardLayout.css';
import { Outlet } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import IMAGES from "../../assets/imgs/IMAGES";
import Offcanvas from 'react-bootstrap/Offcanvas';


const DashboardLayout = () => {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const links = [
    {
      name: 'Overview',
      path: route.hrBoard,
      icon: IMAGES.overview
    },
    {
      name: 'Transaction',
      path: route.transaction,
      icon: IMAGES.fork
    },
    {
      name: 'Settlement',
      path: route.settlement,
      icon: IMAGES.wallet
    },
    {
        name: 'Bank Statement',
        path: route.bankStatement,
        icon: IMAGES.wallet
      },
      {
        name: 'Notification',
        path: route.notification,
        icon: IMAGES.user
      }
  ]


  if(boardRoutes.indexOf(window.location.pathname) !== -1){
    return (
      <React.Fragment>
        <Container fluid className="p-0">
        <Row className="m-0">
        <Col xs={0} md={2} className="sidebar d-flex flex-column align-items-center p-0">

       


      <Offcanvas show={show} onHide={handleClose} responsive="md" className={`${show ? "w-50": "w-100"}`}>
         <Offcanvas.Header closeButton>
          <Offcanvas.Title className="w-100 m-0 px-4 border-bottom">   <img src={IMAGES.logo} alt="logo"/></Offcanvas.Title> 
        </Offcanvas.Header> 
        <Offcanvas.Body>
        

       
                <Navbar className="d-flex flex-column w-100 fixed-start my-2 justify-content-between" bg="white">
                  <Navbar.Brand className="w-100 m-0 px-4 border-bottom d-none d-md-block">
                  <img src={IMAGES.logo} alt="logo"/>
                  </Navbar.Brand>
                  <Card className='welcome-card w-75 p-3 my-4'>
                    <Card.Subtitle className="mb-2">Welcome back</Card.Subtitle>
                    <Card.Subtitle className="titleName">Jacinta</Card.Subtitle>
                  </Card>
                  <div className="w-75 my-3">
                    <h6 className="h6">MENU</h6>
                  </div>
                  <Stack gap={3} className="px-4 py-3">
                    {links.map((x, index) => {
                      return (
                        <Button key={index} className="menu-button p-3 d-flex gap-3" onClick={() => navigate(`${x.path}`)}>
                          <img className="img" src={x.icon} alt="icon"/>
                          <h6 className="h6 m-0 pt-1">{x.name}</h6>
                        </Button>
                      )
                    })}
                  </Stack>
                  <Card className='welcome-card w-75 p-3 my-4 text-center mt-5'>
                    <Card.Img src={IMAGES.profile} style={{width:"50%", height:"50%"}}  className='mb-2 mx-auto' />
                    <Card.Title className="mb-2 h6">Jacinta Chianumba</Card.Title>
                    <Card.Subtitle className="titleName mb-4">CYB-375</Card.Subtitle>
                    <Button variant="outline-danger" className="h6 text-danger" onClick={()=>navigate(route.login)}>Sign out</Button>
                  </Card>
                </Navbar>
           

        </Offcanvas.Body>
      </Offcanvas>
      </Col>

           
            
              <Col xs={12} md={10} className="m-0 p-0">
                <Navbar bg="white borderLight px-4 d-flex justify-content-between " >
                  <Navbar.Text className="d-none d-md-flex">Settlement Automation - Here's what's happening</Navbar.Text>
                  <div className="d-flex justify-content-between gap-3">
                  <Button variant="primary" className="d-md-none bg-white border-0 " onClick={handleShow} >
                    <i class="fa fa-bars text-black " aria-hidden="true"></i> 
       
                  </Button>
                    <div className="p-2 d-flex container-search rounded">
                      <Form.Control className="w-75 h6 search-bar" type="text" placeholder="Search" />
                      <button className="w-25 border-0 bg-white h6 rounded">Enter</button>
                    </div>
                    
                    <div>
                    {window.location.pathname === route.notification ? 
                        <img src={IMAGES.bell}/>
                    : " "}
                    </div>
                  </div>
                </Navbar>
                <Outlet/>
              </Col>
            </Row>
          </Container>


       
    
      </React.Fragment>


    
      
  );
}

}


export default DashboardLayout;