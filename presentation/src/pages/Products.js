import React from 'react'
import ProductsList from '../components/products/ProductsList'


const Products = () => {


    return( 
        <div>
            <section className="dark-background py-5">
                <div>
                    <div className="row">
                        <div className="col-md">
                            <h2 className="dark-title">FUNKO-POP!</h2>
                        </div>
                    </div>
                </div>
            </section>
            <ProductsList/>
            <footer className="dark-background py-5 position-static">
                <div>
                    <div>
                    <div className="col-sm">
                        <h2 className="footer-logo">FUNKO-POP!</h2>
                        <p>Headquartered in downtown Everett, WA, Funko is one of the leading creators and innovators of licensed pop culture products to a diverse range of consumers. 
                        Funko designs, sources and distributes highly collectible products across multiple categories including vinyl figures, 
                        action toys, plush, apparel, housewares and accessories. Our aim is to provide consumers tangible ways to take their fandom offline. </p>
                        <div className="footer-social-links">
                            <a href="https://www.facebook.com/originalfunko/"><i className="px-3 fa fa-facebook"></i></a>
                            <a href="https://twitter.com/originalfunko?lang=en"><i className="px-3 fa fa-twitter"></i></a>
                            <a href="https://www.youtube.com/channel/UCiBxZWamaDdlemljJ3aGPZQ"><i className="px-3 fa fa-youtube"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
            </footer> 
        </div>
    )
}

export default Products;

