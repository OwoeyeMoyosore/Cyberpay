import React from 'react'
import {Row,Col, Button, Badge} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import IMAGES from '../../assets/imgs/IMAGES'
import {route} from "../../utilities/routes"
import notification from "../../notification.json"

const Notification = () => {
    const navigate=useNavigate();
  return (
   <React.Fragment>
        <Row className="m-0 px-4 py-4">
        <div className="d-flex justify-content-between">
          <div>
            <h2>Notification</h2>
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
              <img src={IMAGES.download} alt="down" /> Upload
            </button>
          </div>
        </div>
      </Row>

      <Row className="m-4 p-4 chart align-items-center">
        <p className=''>Recent Notifications <Badge className='rounded-0' style={{backgroundColor:"#206AA2!important" }}>3</Badge></p>
        {/* <CardD pillColor={"#206AA2"} title={"Recent Transactions"} /> */}
        {notification.map((x,index) =>{
            return(
                <Row className="borders2 m-0 h6 fw-bold py-2 mb-3" key={index}>
                    <p className="fw-100 mb-4 mt-2 notidate" style={{color: "#5F6063"}}>{x.date} </p>
                    <p className="fw-bold notidesc">{x.description}</p>
                    <p  className="notibody">{x.body}</p>
       
                </Row>
            )
        })}
        
        </Row>
   </React.Fragment>
  )
}

export default Notification