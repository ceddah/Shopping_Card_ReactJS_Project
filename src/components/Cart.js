import React from 'react'
import { useGlobalContext } from '../context';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Cart = () => {
    const {cart,removeItemFromCart} = useGlobalContext();
    //CHECKOUT Button / Clear Cart BTN
    const renderCartItems = () => {
        return cart.map(item => {
            return (
                <article key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} />
                    <h3 className="cart-item__title">{item.title}</h3>
                    <p className="cart-item__price">€ {item.price}</p>
                    <div className="cart-item__amount">
                        <button>
                            <AddIcon className="control-icon add" />
                        </button>
                        <p className="cart-item__quantity">{item.amount}</p>
                        <button>
                            <RemoveIcon className="control-icon remove" />
                        </button>
                    </div>
                    <button onClick={() => removeItemFromCart(item.id)} className="remove-item">Remove Item</button>
                </article>
            )
        })
    }

    return (
        <div className="cart">
            <h1 className="cart__title">Your Cart</h1>
            <section className="cart__section">
                {cart.length === 0 && <h2 className="empty-notice">Cart Is Empty</h2>}
                <main className="cart__container">
                    {renderCartItems()}
                </main>
                <h5 className="total">Total: 0€</h5>
            </section>
        </div>
    )
}

export default Cart
