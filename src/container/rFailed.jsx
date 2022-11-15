import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTitle } from '../slice/layoutSlice';
import IMAGES from '../assets/imgs/IMAGES';
import { Button } from 'react-bootstrap';
import CustomButton from '../components/customButton';

const ResetF = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setTitle({title: 'Reset Failed'}))
  },[])
  return (
    <React.Fragment>

<div>
      <div className="text-center">
        <img src={IMAGES.error} alt="error" />
        <p className="fw-bold fs-6">Failure</p>
        <p className="fs-8 pb-0">
          There was an error while changing your<br/> password. Please try again.
        </p>
        <CustomButton
          className={"pt-0"}
          onClick={() => navigate("/")}
          buttonName={"Try again"}
        ></CustomButton>
      </div>
    </div>
      </React.Fragment>
  )
}

export default ResetF