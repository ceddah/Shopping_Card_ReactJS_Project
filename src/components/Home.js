import React from 'react'
import { Link } from 'react-router-dom'
import {useGlobalContext} from '../context'; 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Home = () => {
    const {shop} = useGlobalContext();
    const bestDeals = shop
        .sort((a,b) => a.discount > b.discount ? -1 : 1)
        .slice(0, 3);

    const renderFeaturedItems = () => {
        return bestDeals.map((item,idx) => (
            <article key={idx} className="deal-item">
                <img src={item.image}  alt={item.title} />
                <h2 className="deal-title">{item.discount}% on this Article</h2>
                <Link to="/shop">
                    <ShoppingCartIcon className="shop-now-icon" />
                    Shop Now
                </Link>
            </article>
        ))
    }

    return (
        <div className="home">
            <div className="heading">
                <h2>Season Sale</h2>
                <Link to="/shop">Shop Now</Link>
            </div>
            <section className="deals">
                <h1 className="deals__title">Deals Of The Day</h1>
                <main className="deals-container">
                    {renderFeaturedItems()}
                </main>
            </section>
            <div className="shop-at_image">
                <h3>Shop at 23Threads.</h3>
            </div>
        </div>
    )
}

export default Home