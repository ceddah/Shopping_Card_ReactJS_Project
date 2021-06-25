import React from 'react'
import { Link } from 'react-router-dom'
import {useGlobalContext} from '../context'; 
//For items on sale I can sort items by discount and splice for first 3 items and display them
const Home = () => {
    const {shopItems} = useGlobalContext();
    const bestDeals = shopItems
        .sort((a,b) => a.discount > b.discount ? -1 : 1)
        .splice(0, 3);
    console.log(bestDeals)

    const renderItems = () => {
        return bestDeals.map(item => (
            <article className="deal-item">
                <img src={item.image}  alt={item.title} />
            </article>
        ))
    }

    return (
        <div className="home">
            <img src="https://i.postimg.cc/sgZGN8Ch/Mom-High-Pleated-Jeans.jpg" alt="123"/>
            <div className="heading">
                <h2>Season Sale</h2>
                <Link to="/shop">Shop Now</Link>
            </div>
            <section className="deals">
                <h1 className="deals__title">Deals Of The Day</h1>
                <main className="deals-container">
                    {renderItems()}
                </main>
            </section>
            <div className="shop-at_image">
                <h3>Shop at 23Threads.</h3>
            </div>
        </div>
    )
}

export default Home