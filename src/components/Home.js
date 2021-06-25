import React from 'react'
import { Link } from 'react-router-dom'
//For items on sale I can sort items by discount and splice for first 3 items and display them
const Home = () => {
    return (
        <div className="home">
            <div className="heading">
                <h2>Season Sale</h2>
                <Link to="/shop">Shop Now</Link>
            </div>
            <section className="deals">
                <h1 className="deals__title">Deals Of The Day</h1>
            </section>
            <div className="shop-at_image">
                <h3>Shop at 23Threads.</h3>
            </div>
        </div>
    )
}

export default Home