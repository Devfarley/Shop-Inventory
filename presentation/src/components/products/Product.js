import React from 'react'
import DeleteProduct from './DeleteProduct'

function Product ({inventory, refresh}) {

    const displayProduct = inventory.products.map(ele => 
    <div key={ele._id} className="card" style={{width: 350}}>
        <img className="card-img-top" src={`${ele.img}`} alt={ele.description} height="300"  />
        <div className="card-body">
            <h5 className="card-title">{ele.name}</h5>
            <p className="card-text">{ele.description}</p>
            <p>Price: ${parseFloat(ele.price)} </p>
            <p>Quantity: {ele.quantity}</p>
            <button  className="btn btn-primary">Update Product</button>
            <br/>
            <DeleteProduct _id={ele._id} refresh={refresh}/>
        </div>
    </div>)
    return(
        <div className="container">
            <div className="row">
                {displayProduct}
            </div>
        </div>
    )
}

export default Product;