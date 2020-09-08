import React from 'react';

class UpdateProduct extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.products.name,
            description: this.props.products.description,
            quantity: this.props.products.quantity,
            isActive: this.props.products.isActive,
            img: this.props.products.img,
            price: this.props.products.price
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handleClick = (event) => {
        this.setState({
            [event.target.name]: !this.props.products.isActive
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {...data} = this.state
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/inventory/${this.props.products._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify(data)
        }).then(this.props.toggleForm)
          .then(this.props.refresh)
    }
    
    render(){
        return(
            <div className="updateProduct">
                <form onSubmit={this.handleSubmit} className="updateProductForm">
                    <input type="text" name="name" placeholder="Product Name" value={this.state.name} onChange={this.handleChange}/>
                    <textarea type="text" name="description" placeholder="Product Description" value={this.state.description} onChange={this.handleChange}/>
                    <input type="text" name="img" placeholder="Img Url" value={this.state.img} onChange={this.handleChange}/>
                    <input type="text" name="price" placeholder="Product Price" value={this.state.price} onChange={this.handleChange}/>
                    <input type="text" name="quantity" placeholder="Product Quantity" value={this.state.quantity} onChange={this.handleChange}/>
                    <label>Check box to change is Active</label>
                    <input type="checkbox" name="isActive" placeholder="Product isActive" value={this.state.isActive} onClick={this.handleClick}/> 
                    <input type="submit" value="Save Changes" />
                </form>
            </div>
        )
    }
}

export default UpdateProduct;