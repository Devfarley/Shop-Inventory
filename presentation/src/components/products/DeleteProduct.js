import React from 'react'

function DeleteProduct({_id, refresh}){


    const deleteCard = (id, refresh) => {
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/inventory/${id}`, {
            method: "DELETE"
        }).then(response => response.json())
        .then(data => {console.log(data)
            refresh();
        })
    }
    return(
        
        <div>
            <button className="btn btn-danger" onClick={() => deleteCard(_id, refresh)} >Delete Product</button>
        </div>
    )
}

export default DeleteProduct;