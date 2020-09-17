import React from 'react'
import NewAdditions from '../components/products/NewAdditions';

const Home = () => {
    return( 
        <>
             <section className="dark-background py-5">
                <div>
                    <div className="row">
                        <div className="col-md">
                            <h2 className="dark-title">Home</h2>
                        </div>
                    </div>
                </div>
            </section>
            <h2>New Additions</h2>
            <NewAdditions/>
            <footer className="dark-background py-5 ">
                <div>
                    <div>
                    <div className="col-sm">
                        <h2 className="footer-logo">FUNKO-POP</h2>
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
        
        </>
    )
}

export default Home;