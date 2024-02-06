import React from 'react';
import './Cart.css'
const Cart = ({cart,handleRemoveCart}) => {
    
    // conditional rendering options
    // 1. element variables
    // ternary operator
    let command;
    if(cart.length ===0){
        command = <p>Please add at lease 1 items</p>
    }
    else if(cart.length ===1){
        command = <p>Please add more</p>
    }
    else{
        command= <p><small>Thanks for adding</small></p>
    }

    return (
        <div>
            <h2>Item selected: {cart.length}</h2>
            
            {
                cart.map(tShirt=> <p>{tShirt.name}
                <button onClick={()=> handleRemoveCart(tShirt)}>X</button>
                </p>)
            }
            {command}
            {cart.length !==4 ? <p>keep adding</p> : <button>Clear all</button>}
        </div>
    );
};

export default Cart;