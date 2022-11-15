import React from 'react'
import IMAGES from '../assets/imgs/IMAGES'
import CustomButton from '../components/customButton'

const Email = () => {
  return (
    <React.Fragment>

    <div className="text-center">
      <img src={IMAGES.envelope} alt="Logo" />
      <p className="fw-bold fs-6">Check your Inbox</p>
      <p className="fs-8 pb-0">
        To proceed, click on the link sent to
        <span className='fw-bold'> teniola.bashir@cyberspace.net.ng</span>
      </p>
      <CustomButton className={"pt-0"} onClick={() => window.location.href = "/forgotpassword"} buttonName={"Try Again"}></CustomButton>
    </div>
    
    
  </React.Fragment>
  )
}

export default Email

