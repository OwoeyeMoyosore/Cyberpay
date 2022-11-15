import React from "react"
import {Button, Form,} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import CustomButton from "./customButton";


const CustomInput = ({children, type, errorMessage, placeholder,inputClass, required,label,feedback,labelName, labelClass, buttonName}) => {
    
  return (
    <React.Fragment>
        <label className="labelClass form-label">
            {labelName}
        </label>
        <input 
            type={type}
            placeholder={placeholder}
            className ={"inputClass form-control"}
          
        
        ></input>
    </React.Fragment>
 
    
        // <Form.Group md="6" controlId="validationCustom03">
        //   <Form.Label className={"labelClass"}>{labelName}</Form.Label>
        //   <Form.Control type={type} placeholder={placeholder} className={"inputClass"}  />
        //   {type === 'invalid' ? 
        //   <Form.Control.Feedback>{errorMessage}</Form.Control.Feedback>: 
        //   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        //   }
        
        // </Form.Group>
        
       
      
      /* <Form.Group className="mb-3">
        <Form.Check
          required
          label={label}
        //   "Agree to terms and conditions"
          feedback={feedback}
        //   feedbackType="invalid"
        />
      </Form.Group> */
      /* <CustomButton buttonName={buttonName}></CustomButton> */
    //   {children}



    );

}
export default CustomInput