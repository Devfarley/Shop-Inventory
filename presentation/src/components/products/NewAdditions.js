import React from 'react'


class NewAdditions extends React.Component{
    constructor(){
        super()
        this.state = {
            products: []
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


    render(){
        const sortedByNew = this.state.products.sort((a, b) =>{return  new Date(b.date) - new Date(a.date) })
        const displaySorted = sortedByNew.map((ele) => {return <div key={Math.random()} className="card" style={{width: 350}}>
        <img className="card-img-top"  src={ele.img} alt={ele.description} height="300"/>
        <p>{ele.name}</p>
        </div>})
        return(
           <div className="cardcontainer">
            {displaySorted.slice(0,8)}
           </div> 
        )
    }
}

export default NewAdditions;