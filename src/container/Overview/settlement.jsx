import React from 'react'
import { Badge, Button, Col, Row, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import IMAGES from '../../assets/imgs/IMAGES'
import CardD from '../../components/card'
import data from "../../settlement.json"
import {route} from "../../utilities/routes"
import { openModal, closeModal } from '../../slice/modalSlice'
import { useDispatch } from 'react-redux'
import CustomModal from '../../components/customModal'

const Settlement = () => {
const dispatch = useDispatch();

    const navigate = useNavigate();
    
  return (
    <React.Fragment>
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
            <button className="mainButton border-0 rounded text-white p-2 h6 mb-0" onClick={()=> navigate(route.settlement2)}>
              <img src={IMAGES.download} alt="down" /> Process Settlement
            </button>
          </div>
        </div>
      </Row>

        <Row className="ps-0 mx-4 " style={{border: "1px solid #e0e0e1"}}>
           <Col className="ps-0"> <Button className="w-100 border-0 py-3" style={{borderRadius: 0, backgroundColor:"#206AA2"}}>All <Badge className="bg-white text-primary rounded-0">3</Badge></Button></Col>
           <Col> <Button className="bg-white text-black w-100 border-0 py-3">Processed</Button></Col>
           <Col> <Button className="bg-white text-black w-100 border-0 py-3">Reconciled <Badge className="text-white rounded-0" style={{backgroundColor:"#206AA2"}}>3</Badge></Button></Col>
           <Col> <Button className="bg-white text-black w-100 border-0 py-3">Declined </Button></Col>
        </Row>

        <Row className="m-4 p-4 chart align-items-center">
        {/* <CardD pillColor={"#206AA2"} title={"Recent Transactions"} /> */}
        
        <Table responsive borderless>
            <thead className="borders m-0 h6 fw-bold py-2">
              <th className='text-start'>Transaction Duration</th>
              <th className="">Total Amount </th>
              <th className="">Processed Time</th>
              <th className="">Status</th>
              <th></th>
            </thead>
            <tbody>
            {data.map((x, index) => {
            return (
            <tr className="py-2 m-0 h6 align-items-center " key={index}>
              <td >{x.transactionDuration}</td>
              <td >{x.totalAmount}</td>
              <td >{x.processedTime}</td>
              
              <td className={x.status === "Processed" ? "text-warning" : (x.status === "Declined" ? 'text-danger' : 'text-success')} > {x.status}</td>
              <button className="viewButton text-white rounded p-2 my-1">
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

    </React.Fragment>
  )
}

export default Settlement