import React from 'react';
import './TShirt.css'
const TShirt = ({handleAddTCart, tShirt}) => {
    const {name, picture, price} =tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price ${price}</p>
            <button
            onClick={()=> handleAddTCart(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;