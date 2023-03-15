import { useContext } from "react";
import AddToCartContext from "../context/AddToCartContext";

const Navbar = () => {
    const ctx = useContext(AddToCartContext); 
const {cartItems, bill} = ctx; 


    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={{backgroundColor: "#e3f2fd"}}>
            <div className="container-fluid">
                <a className="navbar-brand"  href="/">KFC Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Pricing</a>
                        </li>                    
                    </ul>
                </div>
                <div>
                    <h5>Cart: {cartItems} - Bill: {bill} Rupees</h5>
                </div>


            </div>
        </nav>
    )
}

export default Navbar