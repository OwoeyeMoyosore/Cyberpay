import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Row, Col, Button, Form,Table} from "react-bootstrap"
import IMAGES from '../../assets/imgs/IMAGES';
import { closeModal,openModal } from '../../slice/modalSlice';
import CustomModal from '../../components/customModal';
import {route} from  "../../utilities/routes"
import details from "../../settlement2.json"
import CustomButton from '../../components/customButton';

const SettlementSuccess = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    React.useEffect(() => {
        dispatch(openModal())
    },[])
  return (
    <React.Fragment>
       <CustomModal size={"sm"} className="my-auto align-items-center mt-5" backdrop="static" keyboard={false}

        
        
        body={
          <div>
            <Row className="d-flex justify-content-center px-5">
              <div>

              <div className="text-center">
        <img src={IMAGES.success} alt="Logo" />
        <p className="fw-bold fs-6">Successful</p>
        <p className="fs-8 pb-0">
        Your settlement has been processed successfully.
        </p>
        <Button className={"rounded-1 btn"} onClick={() => navigate(route.settlement)}>Ok</Button>
      </div>
              </div>

              </Row>
            {/* <div className="text-center mt-5 d-flex justify-content-center">
            <Button variant="outline-danger rounded-0" onClick={() => dispatch(closeModal())}>Decline</Button>{' '}
            <Button variant="success rounded-0 ms-3" onClick={() => dispatch(closeModal())}>Approve</Button>{' '}
            </div> */}
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
           <Col className="ps-0"> <Button className="w-100 border-0 py-3" style={{borderRadius: 0, backgroundColor:"#208BA2"}}>Settlement Details</Button></Col>
           <Col> <Button className="bg-white text-black w-100 border-0 py-3 bankStatement" onClick={()=> navigate(route.bankStatement)}>Bank Statement</Button></Col>

           <Col> <Button className="bg-white text-black w-100 border-0 py-3 " onClick={()=> navigate(route.settlementTracker)}>Settlement Tracker </Button></Col>
        </Row>


        <Row className="m-4 p-4 chart align-items-center">
        {/* <CardD pillColor={"#206AA2"} title={"Recent Transactions"} /> */}
        <Table responsive borderless>
            <thead className="borders m-0 h6 fw-bold py-2">
              <th className="text-start">Transaction Time</th>
              <th className="">Transaction Narration </th>
              <th className="">Amount</th>
              <th className="">Merchant</th>
              <th className="">Account Number</th>
              <th className="">Bank Name</th>
              <th></th>
            </thead>
            <tbody>
              {details.map((x, index) => {
                return (
                <tr className="py-2 m-0 h6 align-items-center " key={index}>
                  <td >{x.transactionTime}</td>
                  <td className="text-end" >{x.transactionNarration}</td>
                  <td className='text-center'>{x.amount}</td>
                  <td className='text-start' style={{color: "#206AA2"}}>{x.merchant}</td>
                  <td className='text-start'>{x.accountNumber}</td>
                  <td>{x.bankName}</td>
              
              {/* <Col className={x.status === "Processed" ? "text-warning" : (x.status === "Declined" ? 'text-danger' : 'text-success')} > {x.status}</Col> */}
                <button className="viewButton text-white rounded p-2 my-2">
                  <img src={IMAGES.view} alt="eye" className="text-white me-2" />View
                </button>
            </tr>
        
          );
        })}
            </tbody>


        
          </Table>
      </Row>
      <div className="d-flex mt-1 justify-content-end">
      <img src={IMAGES.page} className="d-flex text-end w-25 align-item-end me-4" alt="page" />
      </div>
{/* 
      <div id="bank">
        <p> Bank </p>
      </div> */}
    </React.Fragment>
  )
}




export default SettlementSuccess