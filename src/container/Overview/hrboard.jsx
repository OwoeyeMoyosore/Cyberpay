import React, { Fragment } from "react";
import { Row, Col, Form, Table } from "react-bootstrap";
import CardD from "../../components/card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import data from "../../data.json";
import { options, dataStyling } from "../../utilities/barConfig";
import IMAGES from "../../assets/imgs/IMAGES";
// import '../styles/StaffDashboardOverview.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HrBoard = () => {
  return (
    <Fragment>
      <Row className="m-0 px-4 py-4">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div>
            <h2>Overview</h2>
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
          
             <button className="filter border-0  rounded  p-2 h6 mb-0 ">
              <img src={IMAGES.filter} alt="down" /> Filters
            </button>
           
            
            <button className="mainButton border-0 rounded text-white p-2 h6 mb-0 ">
              <img src={IMAGES.download} alt="down" /> Download
            </button>
      
          </div>
        </div>
      </Row>
      <Row className="m-0 px-4 firstRow h-auto">
        <Col xs={12} md={6} className="chart p-3">
          <Bar options={options} data={dataStyling} />
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column gap-2">
          <CardD
            pillColor={"#206AA2"}
            title={"Total Transactions"}
            value={12450}
          />
          <CardD
            pillColor={"#C79960"}
            title={"Total Settlements"}
            value={12450}
          />
          <CardD pillColor={"#6C63FF"} title={"Total Merchants"} value={24} />
          <CardD pillColor={"#3D8CD6"} title={"Total Value"} value={24900} />
        </Col>
      </Row>
      <Row className="m-4 p-4 chart align-items-center">
        <CardD pillColor={"#206AA2"} title={"Recent Transactions"} />
        <Table responsive borderless>
          <thead className="borders fw-bold"> 
           <th className="text-start py-2">Customer Name</th>
          <th className="text-start py-2">Transaction Type </th>
          <th className="text-start py-2">Channel</th>
          <th className="text-start py-2" >Date</th>
          <th className="text-start py-2">Status</th>
          <th className="py-2"></th>
          </thead>
          <tbody>
          {data.map((x, index) => {
          return (
            <tr className="py-3 m-0 mt-1 h6 align-items-center " key={index}>
              <td className="py-3">{x.customerName}</td>
              <td >{x.transactionType}</td>
              <td >{x.channel}</td>
              <td >{x.date}</td>
              <td className={x.status === "Pending" ? "text-warning" : (x.status === "Failed" ? 'text-danger' : 'text-success')} > {x.status}</td>
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
      <img src={IMAGES.page} className="d-flex text-end w-25 align-item-end" alt="page" />
      </div>
    
    </Fragment>
  );
};

export default HrBoard;
