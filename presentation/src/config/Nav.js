import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return( 
            <nav className="sticky-top">    
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products">Products</Link> 
                    </li>
                </ul>
            </nav>
    )
}

export default Nav;

