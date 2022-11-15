import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import IMAGES from "../assets/imgs/IMAGES";
import CustomButton from "../components/customButton";

const ResetS = () => {
    const navigate= useNavigate();
  return (
    <React.Fragment>

      <div className="text-center">
        <img src={IMAGES.success} alt="Logo" />
        <p className="fw-bold fs-6">Success</p>
        <p className="fs-8 pb-0">
            You have successfully changed your password. Proceed to log in to your account.
        </p>
        <CustomButton className={"pt-0"} onClick={() => navigate("/")} buttonName={"Login"}></CustomButton>
      </div>
      
      
    </React.Fragment>
  );
};

export default ResetS;
