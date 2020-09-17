import React from 'react'
import DeleteProduct from './DeleteProduct'
import {useState} from 'react'
import UpdateProduct from './UpdateProduct';

function Product ({inventory, refresh}) {

    const [updateForm, setUpdateForm] = useState(false);
    const toggleForm = () => setUpdateForm(!updateForm);


    // const displayProduct = inventory.products.map(ele => )
 
    return(
        <div className="card" >
            <img className="card-img-top" src={`${inventory.img}`} alt={inventory.description}/>
                <div className="card-body">
                    <h5 className="card-title">{inventory.name}</h5>
                    <p className="card-text">{inventory.description}</p>
                    <p>Price: ${parseFloat(inventory.price)} </p>
                    <p>Quantity: {inventory.quantity}</p>
                    <p>Is Active: {inventory.isActive.toString()}</p>
                <button  className="btn btn-primary" onClick={toggleForm}>Update Product</button>
                {updateForm ?<UpdateProduct products={inventory} toggleForm={toggleForm} refresh={refresh}/>: ""} 
                <br/>
                <DeleteProduct _id={inventory._id} refresh={refresh}/>
            </div>
        </div>
    )
}

export default Product;