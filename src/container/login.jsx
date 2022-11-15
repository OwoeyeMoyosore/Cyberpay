import React from "react";
import CustomButton from "../components/customButton";
import CustomCard from "../components/customCard";
import CustomInput from "../components/customInput";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import { route } from "../utilities/routes";
import { useDispatch } from "react-redux";
import { setTitle } from "../slice/layoutSlice";

const Login = () => {
  const [validated, setValidated] = React.useState(false);
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    // e.preventDefault();
    alert("Welcome user");
    navigate(route.reset);
  };

  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(setTitle({title: 'Welcome'}))
  },[])

  return (
    <React.Fragment>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <CustomInput
          // <Form.Group md="6" controlId="validationCustom03">
          //   <Form.Label className={"labelClass"}>{labelName}</Form.Label>
          //   <Form.Control type={type} placeholder={placeholder} className={"inputClass"}  />
          //   {type === 'invalid' ?
          //   <Form.Control.Feedback>{errorMessage}</Form.Control.Feedback>:
          //   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          //   }

          // </Form.Group>
          className="form-control"
          type="text"
          placeholder={"Username"}
          labelName="Username"
          errorMessage={"Please enter username"}
          
        ></CustomInput>

        <span className="d-block">
          <CustomInput
            // className="relative"
            inputClass={"pt-5 position-relative"}
            type="password"
            placeholder={"Enter Password"}
            labelName="Password"
            errorMessage={"Please enter password"}
          ></CustomInput>
          <AiFillEyeInvisible className="position-absolute end-0 translate-middle me-3 mt-2 top-50" />
        </span>

        <div className="d-flex mt-3">
          <Form.Group className="mb-2">
            <Form.Check
              required
              label={"Remember Me"}
              className={"fs-8"}
              //   "Agree to terms and conditions"
              //   feedback={feedback}
              //   feedbackType="invalid"
            />
          </Form.Group>

          <Link
            to="/forgotpassword"
            onClick={()=>{
                dispatch(setTitle({title: 'Forgot Password'}))
            }}
            className="mylink fs-8 ms-auto ps-3 text-end"
          >
            Forgot password?
          </Link>
        </div>

        <CustomButton buttonName={"Sign In"}></CustomButton>
      </Form>
    </React.Fragment>
  );
};
export default Login;
