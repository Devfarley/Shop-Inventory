import React from 'react'
import Product from './Product'
import CreateProductModal from './CreateProductModal'

class ProductsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            selectedProducts: []
        }
    }
    getProducts = () => {
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/inventory`)
            .then(response => response.json())
            .then(data => { return (this.setState({ products: data }), this.setState({ selectedProducts: this.state.products })) })
    }

    componentDidMount() {
        this.getProducts();
    }


    sortProducts = (event) => {
        let sortBy = Boolean(event.target.value)

        let activeProducts = this.state.products.filter(ele => {
            return sortBy === ele.isActive
        })
        this.setState({ selectedProducts: activeProducts })
    }


    allProducts = () => {
        this.getProducts();
        this.setState({ selectedProducts: this.state.products })
    }

    sortSelector = (event) => {
        switch (event.target.value) {
            case "true":
                this.sortProducts(event)
                break
            case "":
                this.sortProducts(event)
                break
            case "all":
                this.allProducts()
                break
            case "quantity":
                this.insertionSort(this.state.products)
                break
            default:
                console.log("hmmm....")
        }

    }

    insertionSort = (array) => {
       
        for (let i = 1; i < array.length; i++) {
            let currentIndex = i
            
          while (currentIndex > 0 && Number(array[currentIndex - 1].quantity) > Number(array[currentIndex].quantity )) {
            let temp = array[currentIndex]
            
            array[currentIndex] = array[currentIndex - 1]
            
            array[currentIndex - 1] = temp
            
            currentIndex--;
          }
        }
        return this.setState({ selectedProducts: array })
      }


    render() {
        const sortedProductsView = this.state.selectedProducts.map(ele => <Product key={ele._id} inventory={ele} refresh={this.getProducts} />)
        return (
            <div>
                <CreateProductModal className="createProductBtn" refresh={this.getProducts} />
                <div className="form-groupheader" >
                    <label htmlFor="FormControlSelect">Sort Products by:</label>
                    <select className="form-control" id="FormControlSelect" defaultValue="all" onLoad={this.sortSelector} onChange={this.sortSelector}>
                        <option value='all'>All Products</option>
                        <option value="true">Active</option>
                        <option value="">NonActive</option>
                        <option value="quantity">Quantity</option>
                    </select>
                </div>
                <div className="cardcontainer">
                    {sortedProductsView}
                </div>
            </div>
        )
    }
}

export default ProductsList;






   // sortProducts = (event) => {
    //     const sortby = event.target.value

    //     if (sortby === "active"){
    //        const sortedproducts = this.state.products.filter(ele => {
    //             return ele.isActive ? ele : null
    //         }).map(ele => <Product key={ele._id} inventory={ele} refresh={this.getProducts}/>)
    //         return sortedproducts
    //     } else if (sortby === "nonactive"){
    //         const sortedproducts = this.state.products.filter(ele => {
    //             return ele.isActive ? null : ele
    //         }).map(ele => <Product key={ele._id} inventory={ele} refresh={this.getProducts}/>)
    //         return sortedproducts
    //     } else if (sortby === "quantity"){

    //         // return sortedProducts
    //     } else if (sortby === "all"){
    //         const sortedproducts = this.state.products.map(ele => <Product key={ele._id} inventory={ele} refresh={this.getProducts}/>)
    //         return sortedproducts
    //     }

    // }