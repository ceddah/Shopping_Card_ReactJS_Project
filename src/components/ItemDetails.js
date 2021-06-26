import React from 'react'
import { useParams, Link } from 'react-router-dom';
import {useGlobalContext} from '../context';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import DoneIcon from '@material-ui/icons/Done';

const ItemDetails = () => {
    const {id} = useParams();
    const {shop} = useGlobalContext();

    const currentItem = shop.find(item => item.id === +id);
    const checkDiscount = () => {
        if(currentItem.discount >= 15) {
            return 'high'
        } else if(currentItem.discount > 10 && currentItem.discount < 15) {
            return 'medium'
        } else {
            return 'low'
        }
    }
    return (
        <div className="item-preview">
            <div className="item-preview__image">
                <img src={currentItem.image} alt={currentItem.title} />
                {currentItem.discount !== 0 && <p className={`discount-tag ${checkDiscount()}`}>Discount {currentItem.discount}%</p>}
            </div>
            <div className="item-preview__details">
                <h1 className="company">H&M Clothing</h1>
                <h3 className="preview-title">{currentItem.title}</h3>
                <h5 className="preview-price">€ {currentItem.price}</h5>
                <p className="preview-desc">{currentItem.description}</p>
                <div className="btn-container">
                    <button className="btn add-to-cart">
                        <ShoppingBasketIcon className="icon" /> 
                        Add to Cart
                    </button>
                    <Link to="/cart" className="btn checkout">
                        <DoneIcon className="icon" />
                        Checkout
                    </Link>
                </div>
                <Link to="/shop" className="back-to-shop">Go Back</Link>
            </div>
        </div>
    )
}

export default ItemDetails
