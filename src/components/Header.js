import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useGlobalContext} from '../context';

const Header = () => {
    const {cart} = useGlobalContext();

    return (
        <header className="App__header">
            <div className="logo">
                <Link to="/"><h1><span>23</span>Threads</h1></Link>
            </div>
            <nav className="nav">
                <ul>
                    <Link className="nav-links" to="/">Home</Link>
                    <Link className="nav-links" to="/shop">Shop</Link>
                    <Link className="nav-links" to="/about_us">About Us</Link>
                    <Link to="/cart">
                        <ShoppingBasketIcon />
                        <p className="cart_total">{cart.length}</p>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header
