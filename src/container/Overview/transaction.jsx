import React from 'react'
import IMAGES from '../../assets/imgs/IMAGES';
import {Row,Col,Dropdown,Form,Card,Button,Table} from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import CustomModal from '../../components/customModal';
import {openModal,closeModal} from "../../slice/modalSlice"
import CardD from '../../components/card';
import { route } from '../../utilities/routes';
import { useDispatch } from 'react-redux';
import data from "../../data.json"

const Transaction = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  const handleShow = () => {
    setShow(!show)
  }
  return (
    <React.Fragment>
      <Row className="m-0 px-4 py-4">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div>
            <h2>Transaction</h2>
            <h6 className="text-secondary">
              Welcome to Cyberpay Settlement Automation
            </h6>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <button
              className="filter border-0 rounded  p-2 h6 mb-0"
              onClick={handleShow}
            >
              <img src={IMAGES.filter} alt="down" /> Filters
            </button>




           


            {/* <button className="mainButton border-0 rounded text-white p-2 h6 mb-0" onClick={() => navigate(route.transction4)}>
              <img src={IMAGES.download} alt="down" /> Download
            </button> */}
            <Dropdown>
              <Dropdown.Toggle
                className="mainButton border-0 rounded text-white p-2 h6 mb-0"
                id="dropdown-basic"
              >
                <img src={IMAGES.download} alt="down" /> Download
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{ width: "400px", height: "300px", border: "none" }}
                className=""
              >
                <Dropdown.Item href="#/action-1">
                  {" "}
                  <Row>
                    <Col>
                      <div>
                        <Card className="">
                          <Form>
                            <Row className="mb-3 mx-auto my-auto">
                              <Form.Group>
                                <Form.Label>From</Form.Label>
                                <Form.Control
                                  required
                                  type="date"
                                  placeholder="mm/dd/yy"
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label>To</Form.Label>
                                <Form.Control
                                  required
                                  type="date"
                                  placeholder="dd/mm/yy"
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label>Channel</Form.Label>
                                <Form.Select size="md">
                                  <option>Select</option>
                                </Form.Select>
                              </Form.Group>
                              <Form.Group>
                                <Form.Label>Merchant Reference</Form.Label>
                                <Form.Control type="text" placeholder="Enter" />
                              </Form.Group>
                            </Row>
                            <Row className="mb-3 mx-auto my-auto">
                              <Form.Group>
                                <Form.Label>Customer Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter"
                                  required
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label>Transaction Reference</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter"
                                  required
                                />
                              </Form.Group>
                              <Form.Group lg="3">
                                <Form.Label>Customer ID</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter"
                                  required
                                />
                              </Form.Group>
                              <Button
                                onClick={() => dispatch(openModal())}
                                className=" d-block mt-3 mx-auto my-auto w-50 ps-3 pe-3"
                                variant="primary"
                              >
                                Apply
                              </Button>
                            </Row>
                          </Form>
                        </Card>
                      </div>
                    </Col>
                  </Row>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>




            <CustomModal
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
                    Receipt
                  </div>
                  <Col>
                    <img
                      className="d-flex mx-auto justify-content-center"
                      style={{ width: "82px", height: "25px" }}
                      src={IMAGES.logo}
                      alt="logo"
                    />
                    <h3>Transaction Details</h3>
                  </Col>
                </Row>
              }
              body={
                <div>
                  <Row className="d-flex justify-content-center">
                    <Col lg={11}>
                      <div className="d-flex flex-row justify-content-between m-0 p-0">
                        <p className="mb-2">Customer ID</p>
                        <p className="mb-2">2240e5-b879-40e5-b879</p>
                      </div>
                      <div className="d-flex flex-row justify-content-between m-0 p-0">
                        <p className="mb-2">Customer Name</p>
                        <p className="mb-2">Adewole Olajuwon</p>
                      </div>
                      <div className="d-flex flex-row justify-content-between m-0 p-0">
                        <p className="mb-2">Merchant Reference</p>
                        <p className="mb-2">1001fd07e5034ae08432dbaa7ab60712</p>
                      </div>
                      <div className="d-flex flex-row justify-content-between m-0 p-0">
                        <p className="mb-2">Transaction Type</p>
                        <p className="mb-2">Wallet</p>
                      </div>
                      <div className="d-flex flex-row justify-content-between m-0 p-0">
                        <p className="mb-2">Reference</p>
                        <p className="mb-2">14533045291876</p>
                      </div>
                      <div className="d-flex flex-row justify-content-between m-0 p-0">
                        <p className="mb-2">Channel</p>
                        <p className="mb-2">Card</p>
                      </div>
                      <div className="d-flex flex-row justify-content-between m-0 p-0">
                        <p className="mb-2">Narration</p>
                        <p className="mb-2">
                          2DSTv/COMPACT-BOUQUET---7900-COMMISSION
                          <br />
                          /CYB090622661645649465 /73284421813756
                        </p>
                      </div>
                      <div className="d-flex flex-row justify-content-between m-0 p-0">
                        <p className="mb-2">Date</p>
                        <p className="mb-2">VatebraEK</p>
                      </div>
                      <div className="d-flex flex-row justify-content-between m-0 p-0">
                        <p className="mb-2">Status</p>
                        <p className="mb-2">Successful</p>
                      </div>
                      <div className="d-flex flex-row justify-content-between m-0 p-0">
                        <p className="mb-2">Message</p>
                        <p className="mb-2">-</p>
                      </div>
                      <div className="d-flex flex-row justify-content-between m-0 p-0">
                        <p className="mb-2">Total Amount Paid</p>
                        <p className="mb-2">₦100,000.00</p>
                      </div>
                      <div className="d-flex flex-row justify-content-between m-0 p-0">
                        <p className="mb-2">Charges</p>
                        <p className="mb-2">₦100,000.00</p>
                      </div>
                      <div className="d-flex flex-row justify-content-between m-0 p-0">
                        <p className="mb-2">Merchant Amount</p>
                        <p className="mb-2">₦10.00</p>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Button onClick={() => dispatch(closeModal())}>
                      <img src={IMAGES.download} alt="down" /> Download
                    </Button>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </Row>


      <div className={`${show ? "d-block" : "d-none"}`}>

<Form>
<Row className="mb-3 mx-auto my-auto">
<Form.Group as={Col} md="3">
<Form.Label>From</Form.Label>
<Form.Control required type="date" placeholder="mm/dd/yy" />
</Form.Group>
<Form.Group as={Col} md="3">
<Form.Label>To</Form.Label>
<Form.Control required type="date" placeholder="dd/mm/yy" />
</Form.Group>
<Form.Group as={Col} md="3">
<Form.Label>Channel</Form.Label>
<Form.Select size="md">
<option>Select</option>
</Form.Select>
</Form.Group>
<Form.Group as={Col} md="3">
<Form.Label>Merchant Reference</Form.Label>
<Form.Control type="text" placeholder="Enter" />
</Form.Group>
</Row>
<Row className="mb-3 mx-auto my-auto">
<Form.Group as={Col} md="3">
<Form.Label>Customer Name</Form.Label>
<Form.Control type="text" placeholder="Enter" required />
</Form.Group>
<Form.Group as={Col} md="3">
<Form.Label>Transaction Reference</Form.Label>
<Form.Control type="text" placeholder="Enter" required />
</Form.Group>
<Form.Group as={Col} md="3" lg="3">
<Form.Label>Customer ID</Form.Label>
<Form.Control type="text" placeholder="Enter" required />
</Form.Group>
<Form.Group as={Col} md="3" lg="3">
<Form.Label>Status</Form.Label>
<Form.Select size="md">
<option>Status</option>
</Form.Select>
</Form.Group>
</Row>
</Form>

</div>



      <Row className="m-4 p-4 chart align-items-center">
        <CardD pillColor={"#206AA2"} title={"Recent Transactions"} />
        <Table responsive borderless>
          <thead className="borders m-0 h6 fw-bold py-2">
            <th className="text-start">Customer Name</th>
            <th className="">Transaction Type </th>
            <th className="">Channel</th>
            <th className="">Date</th>
            <th className="">Status</th>
            <th></th>
          </thead>
          <tbody>
          {data.map((x, index) => {
          return (
            <tr className="py-2 m-0 h6 align-items-center " key={index}>
              <td>{x.customerName}</td>
              <td>{x.transactionType}</td>
              <td>{x.channel}</td>
              <td>{x.date}</td>
              <td
                className={
                  x.status === "Pending"
                    ? "text-warning"
                    : x.status === "Failed"
                    ? "text-danger"
                    : "text-success"
                }
              >
                {" "}
                {x.status}
              </td>
              <button className="viewButton text-white rounded p-2">
                <img src={IMAGES.view} alt="eye" /> View
              </button>
            </tr>
          );
        })}
          </tbody>
        </Table>
      
        
      </Row>
      <div className="d-flex flex-row justify-content-end">
        <img src={IMAGES.page} className="w-25 pe-4 " alt="page" />
      </div>
    </React.Fragment>
  )
}

export default Transaction