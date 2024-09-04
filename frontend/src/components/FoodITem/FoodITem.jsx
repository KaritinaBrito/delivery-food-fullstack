import React, { useContext, useState } from 'react';
import './FoodITem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodITem = ({id, name, price, description, image}) => {
    const [itemCount, setItemCount] = useState(0);
    const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext)

    const cartItemsQuantity = cartItems[id] || 0;
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-img' src={url+"/images/"+image} alt={name}/>
            {!cartItemsQuantity
                ? <img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white}/> 
                : <div className='food-item-counter'>
                    <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='icon less'/>
                    <p>{cartItemsQuantity}</p>
                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='icon plus' />
                </div>
            
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt='rating'/>
            </div>
            <p className="food-item-dec">{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodITem