import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import store from '../store';
import  {openModal, closeModal } from '../slice/modalSlice';


const CustomModal = ({title, body, buttonName, buttonName2,size,backdrop, keyboard}) => {

    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modal.isOpen);
  return (
    <React.Fragment>

      <Modal size={size} show={isOpen} onHide={()=> dispatch(closeModal())} backdrop={backdrop} keyboard={keyboard}>
        <Modal.Header className='modal-header d-flex justify-content-center position-relative'>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={() => dispatch(closeModal())}>
           {buttonName}
          </Button>
          <Button variant="primary" onClick={() => dispatch(closeModal())}>
           {buttonName2}
          </Button> */}
        </Modal.Footer>
      </Modal>

    </React.Fragment>
  );
}
export default CustomModal

// render(<Example />);