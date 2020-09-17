import React from 'react'
import {Form, InputGroup, FormControl, Modal, Button } from 'react-bootstrap'

class CreateProductForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            description: "",
            quantity: "",
            isActive: true,
            img: "",
            price: "",
            date: new Date()
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handleSubmit = (event) => {
        const close = this.props.handleClose
        close()
        event.preventDefault();
        const {...data} = this.state
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/inventory`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify(data)
        }).then(() => this.setState({name: "", description: "", quantity: 0.00, isActive: Boolean, img: "", price: 0.00}))
          .then(this.props.refresh)
    }
    
    render(){
        return(
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Product Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text >Product Description</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        as="textarea" 
                        aria-label="With textarea" 
                    />
                </InputGroup>
                <br/>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Image URL</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="img"
                        value={this.state.img}
                        onChange={this.handleChange}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Img size must be 1000 x 1000"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Product Price</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="price"
                        value={this.state.price}
                        onChange={this.handleChange}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="10.99"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Product Quantity</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.handleChange}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Product is Active?</Form.Label>
                        <Form.Control as="select" name="isActive" value={this.state.isActive} onChange={this.handleChange}>
                            <option>true</option>
                            <option>false</option>
                        </Form.Control>
                </Form.Group>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Add Product
                    </Button>
                </Modal.Footer>
            </div>
        )
    }
}

export default CreateProductForm;