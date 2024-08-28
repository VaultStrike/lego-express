import React, { useContext } from 'react'
import './LegoItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const LegoItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='lego-item'>
            <div className="lego-item-container">
                <img className='lego-item-image' src={image} alt="" />
                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                    : <div className='lego-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>

                }
            </div>
            <div className="lego-item-info">
                <div className="lego-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="lego-item-desc">{description}</p>
                <p className="lego-item-price">${price}</p>
            </div>

        </div>
    )
}

export default LegoItem