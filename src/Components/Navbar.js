import { Fragment } from "react";
import { Link } from "react-router-dom";
const  Navbar = ()=>{
    return(
        <Fragment>
            <nav>
                <Link to={'/'}  exact="true">ShopCart</Link>
                <Link to={'/'}  exact="true">Categories</Link>
                <Link to={'/'}  exact="true">Deals</Link>
                <Link to={'/'}  exact="true">Whats New</Link>
                <Link to={'/'}  exact="true">Delivery</Link>
            </nav>
        </Fragment>
    )

    
}

export default Navbar;