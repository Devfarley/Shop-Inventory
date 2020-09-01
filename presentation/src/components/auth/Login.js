import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Login = () => {
    const [followRedirect, setFollowRedirect] = useState(false)
    return( 
        <>
            <h2>Login</h2>
            <Button variant='contained' color='primary' onClick={() => setFollowRedirect(!followRedirect)}>Login</Button>
            {followRedirect ? <Redirect to='/products'/>: ''}
        </>
    )
}

export default Login;