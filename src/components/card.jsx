import { Card, Col, Row } from "react-bootstrap";
import React from "react";

const CardD = ({pillColor, value, title}) => {
  return (
    <React.Fragment>
      <Card className="cards w-100 h-90">
        <Card.Body>
          <Row>
            <Col xs={1}>
              <Card.Img
                style={{
                  backgroundColor: `${pillColor}`,
                  width: "18px",
                  height: "30px",
                }}
              ></Card.Img>
            </Col>
            <Col xs={11}>
              <h6>{title}</h6>
              <Card.Subtitle>
                {value > 24 && "N"}
                {value}
              </Card.Subtitle>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};


export default CardD