import React, { Fragment } from 'react'
import CustomInput from '../components/customInput'
import CustomButton from '../components/customButton'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setTitle } from '../slice/layoutSlice'

const Reset = () => {
    const navigate= useNavigate()
    const dispatch = useDispatch();
    React.useEffect(() => {
      dispatch(setTitle({title: 'Reset Password'}))
    },[])
  
  return (
    <React.Fragment title={"Reset Password"}>
    <CustomInput 
        type="password" 
        placeholder={"Enter Password"} 
        labelName={"New Password"} 
    />
    <CustomInput 
        type="password" 
        placeholder={"Confirm Password"} 
        labelName={"Confirm Password"} 
    />
    <CustomButton onClick={() => navigate("/resetsuccess")} buttonName={"Reset Password"}></CustomButton>

    </React.Fragment>
  )
}

export default Reset