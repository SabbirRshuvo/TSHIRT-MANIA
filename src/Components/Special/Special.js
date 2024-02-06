import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ornaments}) => {
    const Ring = useContext(RingContext)
    return (
        <div>
            <h5>Special</h5>
            <p>Gift {Ring}</p>
        </div>
    );
};

export default Special;