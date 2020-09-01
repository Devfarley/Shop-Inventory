import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import {useState} from 'react'
import CreateProductForm from './CreateProductForm';

function CreateProductModal (){
 
    

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <>
        <Button variant="primary" onClick={handleShow}>
            Add Product
        </Button>
    
        <Modal show={show} onHide={handleClose}  aria-labelledby="contained-modal-title-vcenter" centered  backdrop="static">
            <Modal.Header closeButton>
            <Modal.Title>Add New Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <CreateProductForm handleClose={handleClose}/>
            </Modal.Body>
            
        </Modal>
        </>
    )
}

export default CreateProductModal;