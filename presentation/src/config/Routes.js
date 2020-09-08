import React from 'react'
import { Route, Switch } from 'react-router-dom'; 
import Products from '../pages/Products';
import Home from '../pages/Home'



const Routes = () => {
    return( 
        <>
            <Switch>
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </>
    )
}

export default Routes;