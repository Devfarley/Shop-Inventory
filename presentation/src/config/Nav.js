import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return( 
        <>
            <h3>Nav</h3>
            <nav>
                
                <Link to="/">Home</Link>
                <br/>
                <Link to="/signup">Signup</Link>
               
            </nav>
        </>
    )
}

export default Nav;