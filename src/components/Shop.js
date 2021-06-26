import React from 'react'
import {useGlobalContext} from '../context';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Shop = () => {
    const {shop} = useGlobalContext();

    const renderShopItems = () => {
        return shop.map(item => {
            const rating = [];
            for(let i = 0; i < item.rating; i++) {
                rating.push({id: i, icon: <StarIcon className="star-icon" />});
            }
            return (
                <article key={item.id} className="shop-item">
                    <Link to={`/shop/item/${item.id}`} className="link-to-preview">
                        <img src={item.image} alt={item.title} />
                    </Link>
                    <div className="item-details">
                        <h5 className="shop-item-title">{item.title}</h5>
                        <div className="item-rating">{rating.map(item => <span key={item.id}>{item.icon}</span>)}</div>
                    </div>
                    <h5 className="item-price">€ {item.price}</h5>
                </article>
            )
        })
    }

    return (
        <div className="shop">
            <div className="shop__banner"></div>
            <h1 className="shop__title">JEANS FOR WOMEN</h1>
            <p className="p-text">
                Shake up your current style with our collection of must-have jeans for women. Whether you want to try skinny, mom, or flare jeans on for size, we have all the staples covered. You can choose from ladies' jeans in a range of light and dark washes, or opt for ragged or dressy options that look great everywhere from the office to the bar. Shop online for classic cuts or the latest trendy fits.
            </p>
            <div className="shop__container">
                {renderShopItems()}
            </div>
        </div>
    )
}

export default Shop
