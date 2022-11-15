import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col,Button, Table } from 'react-bootstrap';
import {route} from "../../utilities/routes"
import IMAGES from '../../assets/imgs/IMAGES';
import details from "../../bankStatement.json"
import { openModal } from '../../slice/modalSlice';
import { useDispatch } from 'react-redux';
import CustomModal from '../../components/customModal';

const BankStatement = () => {
  const dispatch=useDispatch();
    const navigate = useNavigate();
  return (
   <React.Fragment>
     <CustomModal />
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
           <Col className="ps-0"> <Button className="bg-white text-black w-100 border-0 py-3 bankStatement" onClick={() => navigate(route.settlement2)}>Settlement Details</Button></Col>
           <Col> <Button className=" text-white w-100 border-0 py-3" style={{borderRadius: 0, backgroundColor:"#208BA2"}}  onClick={()=> navigate(route.bankStatement)}>Bank Statement</Button></Col>

           <Col> <Button className="bg-white text-black w-100 border-0 py-3 bankStatement" onClick={() => navigate(route.settlementTracker)}>Settlement Tracker </Button></Col>
        </Row>


        <Row className="m-4 p-4 chart align-items-center">
        {/* <CardD pillColor={"#206AA2"} title={"Recent Transactions"} /> */}
        <Table responsive borderless>
            <thead className="borders m-0 h6 fw-bold py-2">
              <th className="text-start">Transaction Reference Number</th>
              <th className="">Beneficiary Name </th>
              <th className="">Payment Amount</th>
              <th className="">Payment Due Date</th>
              <th className="">Beneficiary Code </th>
              <th className="">Beneficiary Account Number</th>
       
            </thead>
            <tbody>
            {details.map((x, index) => {
          return (
            <tr className="py-2 m-0 h6 align-items-center " key={index}>
              <td >{x.transactionReference}</td>
              <td className="text-center" >{x.beneficiaryName}</td>
              <td className='text-center'>{x.paymentAmount}</td>
              <td className='text-start' >{x.paymentdueDate}</td>
              <td className='text-start'>{x.beneficiaryCode}</td>
              <td>{x.beneficiaryAccount}</td>
              
              {/* <Col className={x.status === "Processed" ? "text-warning" : (x.status === "Declined" ? 'text-danger' : 'text-success')} > {x.status}</Col> */}
              {/* <button className="viewButton text-white rounded p-2">
                <img src={IMAGES.view} alt="eye" className="text-white me-2" />View
              </button> */}
            </tr>
        
          );
        })}
            </tbody>
        </Table>

      
        
      </Row>
      <div className="d-flex mt-1 justify-content-end">
      <img src={IMAGES.page} className="d-flex text-end w-25 align-item-end me-4" alt="page" />
      </div>

    </React.Fragment>
  )
}

export default BankStatement