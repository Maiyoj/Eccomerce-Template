import { Fragment } from "react";
import { Link } from "react-router-dom";
import {BsPerson} from "react-icons/bs"
import {TbShoppingCartPlus} from "react-icons/tb"
const  Navbar = ()=>{
    return(
        <Fragment>
            <nav className="flex justify-evenly ">
                <Link to={'/'}  exact="true">ShopCart</Link>
                <Link to={'/'}  exact="true">Categories</Link>
                <Link to={'/'}  exact="true">Deals</Link>
                <Link to={'/'}  exact="true">Whats New</Link>
                <Link to={'/'}  exact="true">Delivery</Link>
                <input className="bg-gray-200"/>
                <Link to={'/'}  exact="true">
                <div className="flex justify-evenly ">
                    <BsPerson className="  fontSize: rem"/> Account
                </div>
                </Link> 
                <Link>
                <div className="flex justify-evenly ">
                <TbShoppingCartPlus/> Cart
                </div></Link>
            </nav>
        </Fragment>
    )

    
}

export default Navbar;