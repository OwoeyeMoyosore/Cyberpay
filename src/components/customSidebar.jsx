import React from "react";
import {Col, Stack, Row} from "react-bootstrap"

const CustomSidebar = () => {
  return (
    <React.Fragment>
      <Row>
        <Col lg={3}>
          <Stack gap={3} direction="vertical" className="pt-3">
            <div className="bg-primary rounded">Welcome back <br/> Jacinta</div>
            <div className="bg-light ">First item</div>
            <div className="bg-light ">Second item</div>
            <div className="bg-light">Third item</div>
          </Stack>
        </Col>
        <Col lg={9}></Col>
      </Row>
    </React.Fragment>
  );
};

export default CustomSidebar;
