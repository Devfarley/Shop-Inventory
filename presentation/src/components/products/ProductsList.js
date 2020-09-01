import React from 'react'
import Product from './Product'
import CreateProduct from './CreateProductModal'

class ProductsList extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        products: []
    }
    }
    getProducts = () => {
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/inventory`)
            .then(response => response.json())
            .then(data => this.setState({products:data}))
    }

    componentDidMount(){
        this.getProducts();
    }


    
    render(){
        return(
            <div>
                <CreateProduct/>
                <Product  inventory={this.state} refresh={this.getProducts}/>
            </div>
        )
    }
}

export default ProductsList;