import React from "react";
import CustomInput from "../components/customInput";
import CustomButton from "../components/customButton";
import { useNavigate } from "react-router-dom";
import { route } from "../utilities/routes";
import { useDispatch } from "react-redux";
import { setTitle } from "../slice/layoutSlice";

const Forgot = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate()
    React.useEffect(() => {
      dispatch(setTitle({title : "Forgot Password"}))
    },[])
  return (
    <React.Fragment>
      <CustomInput type="email" placeholder={"Enter official email"} className={"fpass"}>
        
      </CustomInput>
      <CustomButton onClick={() => navigate(route.fEmail)} buttonName={"Forgot Password"}></CustomButton>
    </React.Fragment>
  );
};

export default Forgot;
