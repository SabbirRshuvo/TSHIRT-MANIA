import React, { useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';
import useTshirts from '../../Hooks/useThirst';
import TShirt from '../TShirt/TShirt';


const Home = () => {
    const [tShirts, setTshirts] =useTshirts();
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {/* <h3>{tShirts.length}</h3> */}
                {
                    tShirts.map(tShirt => <TShirt
                    key={tShirt.id}
                    tShirt={tShirt}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;