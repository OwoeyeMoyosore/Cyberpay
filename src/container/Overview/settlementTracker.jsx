import React from 'react'
import { Badge, Button, Col, Row,Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import IMAGES from '../../assets/imgs/IMAGES'
import CardD from '../../components/card'
import data from "../../settlement.json"
import {route} from "../../utilities/routes"
import { openModal, closeModal } from '../../slice/modalSlice'
import { useDispatch } from 'react-redux'
import CustomModal from '../../components/customModal'
import details from "../../settlement2.json"


const  SettlementTracker = () => {
    const navigate=useNavigate();
    const dispatch =useDispatch();
  return (
    <React.Fragment>
    <CustomModal className="mt-5"
    size={"lg"}
     title={
       <Row className="">
         <div
           className="d-flex flex-row text-white text position-absolute pt-5 fw-bold ps-4 "
           style={{
             width: "80px",
             height: "70px",
             backgroundColor: "#2F8ED6",
           }}
         >
        Approval
         </div>
         <Col>
           <img
             className="d-flex mx-auto justify-content-center"
             style={{ width: "82px", height: "25px" }}
             src={IMAGES.logo}
             alt="logo"
           />
           <h3>Settlement</h3>
         </Col>
       </Row>
     }
     body={
       <div>
         <Row className="d-flex justify-content-center px-5">
           <p className='fw-bold pt-5'> To proceed with settlement appproval, kindly confirm that you have checked:</p>
           <div>
           <Form.Group className="mb-3" controlId="formBasicCheckbox">
             <Form.Check type="checkbox" label="Date of Transaction" />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicCheckbox">
             <Form.Check type="checkbox" label="Merchant Transaction" />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicCheckbox">
             <Form.Check type="checkbox" label="Amount of Transaction" />
           </Form.Group>

           <Form.Label controlId="floatingTextarea2" label="Remarks" className="pt-4">
   <span className='fw-bold'>Remarks</span>(optional)
   </Form.Label>
   <Form.Control
       as="textarea"
       placeholder="Leave a comment here"
       style={{ height: '80px' }}
       className= "rounded-0"
     />


           </div>

           </Row>
         <div className="text-center mt-5 d-flex justify-content-center">
         <Button variant="outline-danger rounded-0" onClick={() => dispatch(closeModal())}>Decline</Button>{' '}
         <Button variant="success rounded-0 ms-3" onClick={() => navigate(route.settlementSuccess)}>Approve</Button>{' '}
         </div>
       </div>
     }
    />



     <Row className="m-0 px-4 py-4">
     <div className="d-flex flex-column flex-md-row justify-content-between">
       <div>
         <h2>Settlement</h2>
         <h6 className="text-secondary">
           Welcome to Cyberpay Settlement Automation
         </h6>
       </div>
       <div className="d-flex gap-3 align-items-center">
         {/* <Form.Select className="w-50">
           {data.map((x, index) => {
             return <option key={index}>{x.month} 2022</option>;
           })}
         </Form.Select> */}
          <button className="filter border-0 rounded  p-2 h6 mb-0">
           <img src={IMAGES.filter} alt="down" /> Filters
         </button>
         <button className="mainButton border-0 rounded text-white p-2 h6 mb-0" onClick={() => {dispatch(openModal())}}>
           <img src={IMAGES.download} alt="down" /> Approve Settlement
         </button>
       </div>
     </div>
   </Row>

     <Row className="ps-0 mx-4 " style={{border: "1px solid #e0e0e1"}}>
        <Col className="ps-0"> <Button className="w-100 border-0 py-3 bg-white text-black " onClick={() => navigate(route.settlement2)}>Settlement Details</Button></Col>
        <Col> <Button className="bg-white text-black w-100 border-0 py-3 bankStatement" onClick={()=> navigate(route.bankStatement)}>Bank Statement</Button></Col>

        <Col> <Button className="w-100 border-0 py-3 bankStatement "  onClick={()=> navigate(route.settlementTracker)}  style={{borderRadius: 0, backgroundColor:"#208BA2"}}>Settlement Tracker </Button></Col>
     </Row>


     <Row className="m-4 p-4 chart align-items-center">
     {/* <CardD pillColor={"#206AA2"} title={"Recent Transactions"} /> */}
    
     <div className="text-center mb-5">
          {" "}
          <img src={IMAGES.card} alt="book" style={{ width: "100px", height: "100px" }} />
          <div className="text-center pt-3">
        <b>No Bank Statement yet</b>
        <h6 className="d-block pt-2">The bank statement of this processed <br/> settlement will appear here.</h6>
        </div>
        </div>
     
   </Row>
 

 </React.Fragment>
  )
}

export default SettlementTracker