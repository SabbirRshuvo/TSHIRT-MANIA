import React, { useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';
import useTshirts from '../../Hooks/useThirst';
import TShirt from '../TShirt/TShirt';


const Home = () => {
    const [tShirts, setTshirts] =useTshirts();
    const [cart, setCart] =useState([]);

    const handleAddTCart = (selectedItem) =>{
        console.log(selectedItem);
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if(!exists){
            const newCart = [...cart, selectedItem];
        setCart(newCart);
        }
        else{
            alert('item already added')
        }
    }

    const handleRemoveCart = (selectedItem) =>{
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest)
    }


    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {/* <h3>{tShirts.length}</h3> */}
                {
                    tShirts.map(tShirt => <TShirt
                    key={tShirt.id}
                    tShirt={tShirt}
                    handleAddTCart={handleAddTCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                handleRemoveCart={handleRemoveCart}
                cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;