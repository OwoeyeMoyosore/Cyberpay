import React from "react";
import { Button } from "react-bootstrap";
import CustomInput from "./customInput";

const CustomButton = ({ buttonName, onClick }) => {
  return (
    <Button type="submit" className={"border-0 w-100 ps-3 mt-4 mybtn"} onClick={onClick}>
      {buttonName}
    </Button>
  );
};

export default CustomButton;
